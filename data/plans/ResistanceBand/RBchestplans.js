import { RBExercises } from "../../exerciseTypes/ResistanceBand/exercises";
import { chestEx } from "../../exerciseTypes/chest";
import img from '../../../assets/rb.jpg'

export const RBchestplans = [
    {
        name: 'Chest',
        image: img,
        level: 'Beginner',
        description: ' The plan is designed for beginners and incorporates exercises using resistance bands as well as bodyweight exercises. The plan aims to help newcomers build strength and muscle in their chest.The workout plan consists of 12 exercises in total, including a combination of resistance band exercises and bodyweight exercises. The exercises are performed with a specific number of repetitions and rest intervals between sets.',
        noOfExercises: 12,
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
                ...chestEx[15],
                type: 'work',
                reps: 14
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[0],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[1],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[2],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[3],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[16],
                type: 'work',
                reps: 14
            },
            {
                type: 'rest',
                time: 50
            },
            {
                ...chestEx[15],
                type: 'work',
                reps: 10
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[0],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[1],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[2],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[3],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[16],
                type: 'work',
                reps: 10
            }
        ]
    }
]