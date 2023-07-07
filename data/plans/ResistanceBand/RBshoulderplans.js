import { RBExercises } from "../../exerciseTypes/ResistanceBand/exercises";
import { chestEx } from "../../exerciseTypes/chest";
import img from '../../../assets/rb.jpg'

export const RBshoudlerplans = [
    {
        name: 'Shoulder & Back',
        image: img,
        level: 'Beginner',
        description: 'The shoulder and back exercise is part of a beginner-level workout plan that incorporates the use of resistance bands and bodyweight exercises. The primary goal of this exercise is to help beginners build strength and muscle in their shoulders and back.',
        noOfExercises: 16,
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
                ...RBExercises[6],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[7],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[8],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[10],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[11],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[12],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[15],
                type: 'work',
                reps: 20
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
                ...RBExercises[6],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[7],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[8],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[10],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[11],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[12],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[15],
                type: 'work',
                reps: 20
            },
        ]
    }
]