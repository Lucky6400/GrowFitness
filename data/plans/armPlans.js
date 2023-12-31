import { armEx } from "../exerciseTypes/arms";

export const armPlans = [
    {
        name: 'Arm Novice',
        bodyPart: 'arms',
        image: "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg",
        level: 'Beginner',
        description: 'This beginner-level arm workout is designed to help newcomers build strength and muscle in their arm. It includes a combination of bodyweight exercises and dumbbell presses to target the arm muscles from various angles. The workout consists of 8 exercises with 8 reps each, followed by some seconds of rest between sets.',
        noOfExercises: 8,
        exercises: [
            {
                ...armEx[15],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 10
            },
            {
                ...armEx[0],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 10
            },
            {
                ...armEx[1],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[4],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[15],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[0],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[1],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[4],
                reps: 8,
                type: 'work'
            }
        ]
    },
    {
        name: 'Power punch arms',
        level: 'Intermediate',
        bodyPart: 'arms',
        image: "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg",
        noOfExercises: 14,
        description: 'Get ready for an intense arm pump with this intermediate-level workout. The Ultimate arm Pump routine focuses on maximizing muscle growth and strength in the arm. It incorporates a variety of exercises, including push-ups, curls, and dips, to challenge the arm muscles from different perspectives. Each exercise consists of higher reps for increased muscle endurance. Take some seconds of rest between sets to recover.',
        exercises: [
            {
                ...armEx[15],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[16],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[17],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[0],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[1],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[10],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[11],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[15],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[16],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[17],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[0],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[1],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[10],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...armEx[11],
                reps: 12,
                type: 'work'
            }
        ]
    }
]