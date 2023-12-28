import { chestEx } from "../exerciseTypes/chest";

export const chestPlans = [
    {
        name: 'Newbie Chest Workout',
        level: 'Beginner',
        bodyPart: 'chest',
        image: "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg",
        description: 'This beginner-level chest workout is designed to help newcomers build strength and muscle in their chest. It includes a combination of bodyweight exercises and dumbbell presses to target the chest muscles from various angles. The workout consists of 8 exercises with 8 reps each, followed by 30 seconds of rest between sets.',
        noOfExercises: 8,
        exercises: [
            {
                ...chestEx[15],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 10
            },
            {
                ...chestEx[0],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 10
            },
            {
                ...chestEx[1],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[4],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[15],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[0],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[1],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[4],
                reps: 8,
                type: 'work'
            }
        ]
    },
    {
        name: 'Ultimate Chest Pump',
        level: 'Intermediate',
        bodyPart: 'chest',
        noOfExercises: 14,
        image: "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg",
        description: 'Get ready for an intense chest pump with this intermediate-level workout. The Ultimate Chest Pump routine focuses on maximizing muscle growth and strength in the chest. It incorporates a variety of exercises, including push-ups, flyes, and presses, to challenge the chest muscles from different perspectives. Each exercise consists of higher reps for increased muscle endurance. Take 30 seconds of rest between sets to recover.',
        exercises: [
            {
                ...chestEx[15],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[16],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[17],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[0],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[1],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[10],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[11],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[15],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[16],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[17],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[0],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[1],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[10],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...chestEx[11],
                reps: 12,
                type: 'work'
            }
        ]
    }
]