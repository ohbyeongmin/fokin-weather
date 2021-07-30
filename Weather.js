import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";

const weatherOptions = {
    Clouds: {
        iconName: "cloud",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "clouds~~~~~",
        subTitle: "watch out!",
    },
    Thunderstorm: {
        iconName: "Thunderstorm",
        gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
    },
    Drizzle: {
        iconName: "Drizzle",
        gradient: ["#50c9c3", "96deda"],
    },
    Rain: {
        iconName: "Rain",
        gradient: ["#ffffff", "#ffffff"],
    },
    Snow: {
        iconName: "Snow",
        gradient: ["#ffffff", "#ffffff"],
    },
    Atmosphere: {
        iconName: "Atmosphere",
        gradient: ["#F2994A", "#F2C94C"],
    },
    Clear: {
        iconName: "Clear",
        gradient: ["#2F80ED", "#56CCF2"],
    },
    Haze: {
        iconName: "Haze",
        gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
    },
    Mist: {
        iconName: "Mist",
        gradient: ["#2980B9", "#6DD5FA"],
    },
    Dust: {
        iconName: "Dust",
        gradient: ["#ffffff", "#ffffff"],
    },
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={
                        weatherOptions[condition]?.iconName || "weather-sunset"
                    }
                    size={96}
                    color="white"
                />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subTitle}>
                    {weatherOptions[condition].subTitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
    ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 36,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
    },
    subTitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
    },
});
