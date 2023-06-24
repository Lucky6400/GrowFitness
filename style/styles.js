import { StyleSheet } from "react-native";
import { primary, primaryLighter, secondary } from "./theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    homeHero: {
        backgroundColor: primary,
        width: '100%',
        height: '100%',
        padding: 0,
        opacity: 0.5,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    heroHeading: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10
    },
    imageHero: {
        width: '100%',
        height: 200,
        opacity: 1,
        justifyContent: 'center',
    },
    heroQuote: {
        marginHorizontal: 10,
        color: '#fff',
        fontStyle: 'italic',
        fontSize: 16,
        fontWeight: 300,
        height: 75
    },
    heroGoal: {
        flexDirection: 'row',
        margin: 10
    },
    goalLeft: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 700,
        marginRight: 5
    },
    goalRight: {
        color: '#fff',
        textTransform: 'capitalize',
        fontWeight: 300,
    },
    homeCenter: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: -15,
        padding: 10,
        paddingTop: 10,
    },
    h01: {
        fontWeight: 600,
        fontSize: 18,
        marginVertical: 10,
        borderBottomColor: "#cfcfcf",
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginTop: 20,
        textTransform: 'capitalize'
    },
    continue: {
        width: '100%',
        height: 120,
        borderRadius: 10,
    },
    workoutName: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 700,
        margin: 5
    },
    workoutProgress: {
        backgroundColor: primary,
        height: 10,
        position: 'absolute',
        bottom: 0
    },
    wrk01: {
        width: 250,
        height: 125,
        backgroundColor: primary,
        marginRight: 10
    },
    status: {
        width: '100%',
        borderWidth: 1,
        borderColor: secondary,
        borderRadius: 3,
        padding: 10
    },
    h02: {
        color: primary,
        textTransform: 'uppercase',
        fontWeight: 600
    },
    planDetails: {
        fontWeight: 300,
        textTransform: 'capitalize',
        fontSize: 12,
        color: "#fff",
        marginHorizontal: 10
    },
    scheduler: {
        padding: 10
    },
    sch01: {
        width: 100,
        height: 100,
        backgroundColor: primaryLighter,
        marginRight: 15,
        borderRadius: 10
    }
})