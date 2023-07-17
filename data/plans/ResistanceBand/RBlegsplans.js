import { RBExercises } from "../../exerciseTypes/ResistanceBand/exercises";
import { chestEx } from "../../exerciseTypes/chest";
import img from '../../../assets/rb.jpg'

export const RBlegsplans = [
    {
        name: 'Legs',
        image: "https://images.pexels.com/photos/6667512/pexels-photo-6667512.jpeg",
        level: 'Beginner',
        description: 'The legs plan is a beginner-level workout plan that combines resistance band exercises with bodyweight exercises to effectively target and strengthen the muscles in the legs. The primary goal of this plan is to help beginners develop leg strength and enhance overall lower body fitness.',
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
                ...RBExercises[18],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[19],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[20],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[21],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[22],
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
                ...RBExercises[18],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[19],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[20],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[21],
                type: 'work',
                reps: 20
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...RBExercises[22],
                type: 'work',
                reps: 20
            }
        ]
    }
]