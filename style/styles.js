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
        backgroundColor: '#fff',
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
        width: 250,
        height: 150,
        backgroundColor: primaryLighter,
        marginRight: 15,
        borderRadius: 10
    },
    planCont: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        paddingVertical: 10,
    },
    exModalCont: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        paddingVertical: 10,
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: primaryLighter,
        textTransform: 'uppercase',
        marginVertical: 15
    },
    planDesc: {
        color: '#505050',
        fontWeight: 500
    },
    exCard: {
        width: '100%',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dfdfdf',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10
    },
    RestTime: {
        fontSize: 32,
        color: primary,
        width: '100%',
        textAlign: 'center',
        marginVertical: 20
    },
    nextBtn: {
        width: '100%',
        backgroundColor: primary,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    modalView: {
        paddingBottom: 60
    },
    reps: {
        fontSize: 40,
        color: "#fff",
        width: 100,
        height: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: primary,
        alignSelf: 'center',
        textAlignVertical: 'center',
        borderRadius: 100,
        marginTop: 20
    },
    plusBtn: {
        width: 50,
        height: 50,
        backgroundColor: primary,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 100,
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    addPlanCont: {
        backgroundColor: '#fff',
        flex: 1
    },
    inputStyle: {
        borderWidth: 1, borderColor: secondary, marginHorizontal: 10, padding: 5, borderRadius: 5,
        marginVertical: 5, textAlignVertical: 'top'
    },
    customPlanHeading: {
        margin: 10,
        fontSize: 16,
        fontWeight: 500,
    },
    addEx: {
        backgroundColor: primary,
        width: 220,
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 100,
        marginBottom: 10
    },
    addExTxt: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    exCont: {
        flex: 1,
        backgroundColor: '#0000004c',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    exView: {
        backgroundColor: '#fff',
        width: '90%',
        height: 400,
        padding: 10
    },
    exListCard: {
        width: '100%',
        borderWidth: 1,
        borderColor: secondary,
        borderRadius: 5,
        padding: 5,
        marginVertical: 5
    },
    exDesc: {
        fontSize: 12,
        fontWeight: 600,
        color: secondary
    },
    editBtn: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    schDesc: {
        color: '#fff',
        fontWeight: 300,
        fontSize: 12,
        padding: 5
    },
    histCard: {
        borderTopWidth: 1,
        borderColor: '#cfcfcf',
        padding: 5
    },
    smallText: {
        fontSize: 12,
        color: '#909090'
    },
    profileImage: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 500,
        borderColor: '#000',
        borderWidth: 4
    },
    profCard: {
        borderTopWidth: 1,
        borderColor: '#cfcfcf',
        padding: 5,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    cardTxt: {
        fontSize: 14,
        fontWeight: 600,
    },
    inputStyle2: {
        borderBottomWidth: 1,
        borderBottomColor: '#cfcfcf',
        marginVertical: 5,
        paddingVertical: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        paddingHorizontal: 10,
        marginTop: 220
    }
})