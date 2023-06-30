import { legExercises } from "../exerciseTypes/legs";
import img from '../../assets/dumbbell-press.jpg';
import armImg from '../../assets/img01.jpg'
import absImg from '../../assets/abs.jpg'
import shImg from '../../assets/shoulder.jpg'
import lgImg from '../../assets/legs.jpg'

export const legPlans = [
    {
        name: 'Leg Sculptor',
        level: 'Beginner',
        image: lgImg,
        description: "Get ready to sculpt and tone your legs with this beginner-level leg workout plan. Designed to target all major leg muscles, this plan incorporates a combination of bodyweight exercises and dumbbell movements. Whether you're looking to build strength or enhance muscle definition, this workout consisting of 10 exercises will help you achieve your leg goals.",
        noOfExercises: 8,
        exercises: [
            {
                ...legExercises[15],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 10
            },
            {
                ...legExercises[0],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 10
            },
            {
                ...legExercises[1],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[4],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[15],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[0],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[1],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[4],
                reps: 8,
                type: 'work'
            }
        ]
    },
    {
        name: "Leg Shredder",
        level: 'Intermediate',
        noOfExercises: 14,
        image: lgImg,
        description: "Take your leg training to the next level with the intermediate-level leg shredder plan. This intense workout routine is designed to challenge your leg muscles and promote muscle growth. Featuring a mix of weighted exercises and advanced bodyweight movements, this plan consisting of 12 exercises will push your leg endurance and help you achieve a sculpted lower body.",
        exercises: [
            {
                ...legExercises[15],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[16],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[17],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[0],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[1],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[10],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[11],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[15],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[16],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[17],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[0],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[1],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[10],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...legExercises[11],
                reps: 12,
                type: 'work'
            }
        ]
    }
]