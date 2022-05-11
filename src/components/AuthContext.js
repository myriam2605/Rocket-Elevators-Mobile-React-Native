import { View, Text } from "react-native";
import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    return <AuthProvider value="Test value">{children}</AuthProvider>;
};
