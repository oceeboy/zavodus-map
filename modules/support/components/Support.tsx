import React, { useState, useRef } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Message } from "../types";
import { getBotResponse } from "../services/supportbot.service";
import { useTheme } from "@/providers/ThemeProvider";
import { THEME } from "@/constants/theme";

export function Support() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const flatListRef = useRef<FlatList<Message>>(null);

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: inputText,
      time: new Date().toLocaleTimeString(),
    };

    setMessages((prevMessages) => [newMessage, ...prevMessages]);
    setInputText("");

    setTimeout(() => {
      const botMessage: Message = {
        id: newMessage.id + 1,
        sender: "bot",
        text: getBotResponse(inputText),
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [botMessage, ...prevMessages]);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === "user"
                ? {
                    alignSelf: "flex-end",
                    backgroundColor: theme.BOT.BACKGROUND.PRIMARY,
                  }
                : {
                    alignSelf: "flex-start",
                    backgroundColor: theme.BOT.BACKGROUND.SECONDARY,
                  },
            ]}
          >
            <Text
              style={[
                styles.messageText,
                {
                  color:
                    item.sender === "user"
                      ? theme.BOT.TEXT.PRIMARY
                      : theme.BOT.TEXT.SECONDARY,
                },
              ]}
            >
              {item.text}
            </Text>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        )}
        inverted
        contentContainerStyle={{ paddingBottom: 50 }}
      />

      <View style={[styles.inputContainer, { paddingBottom: insets.bottom }]}>
        <TextInput
          shouldRasterizeIOS
          style={styles.input}
          placeholder="Say hello..."
          placeholderTextColor={"black"}
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Ionicons name="send" size={24} color={theme.BUTTON.PRIMARY} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    maxWidth: "75%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  messageText: {
    fontSize: THEME.FONT_SIZE.MEDIUM,
    fontFamily: THEME.FONT_FAMILY.TEXT.MEDIUM,
  },
  timeText: {
    fontSize: 12,
    alignSelf: "flex-end",
    color: "gray",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    marginRight: 10,
  },
});
