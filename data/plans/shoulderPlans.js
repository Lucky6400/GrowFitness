import { shoulderAndBackExercises } from "../exerciseTypes/shoulderAndBack";

export const shoulderPlans = [
    {
        name: 'Shoulder Strength Builder',
        level: 'Beginner',
        image: "https://images.pexels.com/photos/7289370/pexels-photo-7289370.jpeg",
        description: 'This beginner-level shoulder workout is designed to help build strength and enhance the development of shoulder muscles. It includes a combination of dumbbell exercises and bodyweight movements targeting the shoulders and back. The workout consists of 15 dumbbell exercises and 10 bodyweight exercises, focusing on improving overall shoulder strength and stability.',
        noOfExercises: 8,
        exercises: [
            {
                ...shoulderAndBackExercises[15],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 10
            },
            {
                ...shoulderAndBackExercises[0],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 10
            },
            {
                ...shoulderAndBackExercises[1],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[4],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[15],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[0],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[1],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[4],
                reps: 8,
                type: 'work'
            }
        ]
    },
    {
        name: 'Shoulder and Back Toning',
        level: 'Intermediate',
        noOfExercises: 14,
        image: "https://images.pexels.com/photos/7289370/pexels-photo-7289370.jpeg",
        description: 'Get ready for an intense shoulder and back toning workout with the "Shoulder and Back Toning" plan. This intermediate-level routine is designed to maximize muscle growth and strength in the shoulder and back areas. It incorporates a variety of dumbbell exercises and bodyweight movements, targeting different muscle groups within the shoulders and back. Each exercise consists of higher reps for increased muscle endurance. The plan consists of 15 dumbbell exercises and 10 bodyweight exercises, with rest periods of 30 seconds between sets.',
        exercises: [
            {
                ...shoulderAndBackExercises[15],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[16],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[17],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[0],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[1],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[10],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[11],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[15],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[16],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[17],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[0],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[1],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[10],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...shoulderAndBackExercises[11],
                reps: 12,
                type: 'work'
            }
        ]
    }
]