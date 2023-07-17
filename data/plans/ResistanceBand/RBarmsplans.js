import { RBExercises } from "../../exerciseTypes/ResistanceBand/exercises";
import { armEx } from "../../exerciseTypes/arms";

export const RBarmsplans = [
    {
        name: 'Arms',
        image: "https://images.pexels.com/photos/6667512/pexels-photo-6667512.jpeg",
        level: 'Beginner',
        description: 'The plan is designed for beginners and incorporates exercises using resistance bands as well as bodyweight exercises. The plan aims to help newcomers build strength and muscle in their arms.The workout plan consists of 18 exercises in total, including a combination of resistance band exercises and bodyweight exercises. The exercises are performed with a specific number of repetitions and rest intervals between sets.',
        noOfExercises: 18,
        exercises: [
            {
                id: Date.now(),
                name: 'Jumping Jacks',
                equipment: 'Bodyweight',
                description: 'Jump and stretch your legs where as move your hands up and closer. Inhale when coming down, exhale when going up.',
                uri: '',
                type: 'work',
                reps: 30
            },
            {
                type: 'rest',
                time: 10
            },
            {
                ...armEx[15],
                type: 'work',
                reps: 14
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[23],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[24],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[25],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[26],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[16],
                type: 'work',
                reps: 14
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[17],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[32],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[33],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 50
            },
            {
                ...armEx[15],
                type: 'work',
                reps: 14
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[23],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[24],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[25],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[26],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[16],
                type: 'work',
                reps: 14
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[17],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[32],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[33],
                type: 'work',
                reps: 20
            }
        ]
    }
]