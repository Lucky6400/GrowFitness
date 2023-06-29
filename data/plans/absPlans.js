import { absEx } from "../exerciseTypes/abs";

export const absPlans = [
    {
        name: 'Abs starter',
        level: 'Beginner',
        description: 'This beginner-level abs workout is designed to help newcomers build strength and tone their abdominal muscles. It includes a combination of bodyweight exercises and targeted movements using a stability ball. The workout consists of 8 exercises, each performed for 8 reps, followed by short rest periods of 10-30 seconds between sets. By following this plan, beginners can gradually develop their core strength and improve their overall abdominal definition.',
        noOfExercises: 8,
        exercises: [
            {
                ...absEx[15],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 10
            },
            {
                ...absEx[0],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 10
            },
            {
                ...absEx[1],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[4],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[15],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[0],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[1],
                reps: 8,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[4],
                reps: 8,
                type: 'work'
            }
        ]
    },
    {
        name: 'Shredded Abs',
        level: 'Intermediate',
        noOfExercises: 14,
        description: 'Get ready for an intense abs workout with the "Shredded Abs" plan. This intermediate-level routine is designed to maximize muscle growth and strength in the abdominal area. It incorporates a variety of exercises, including crunches, planks, and leg raises, to target the abs from different angles. Each exercise consists of higher reps for increased muscle endurance. The plan consists of 14 exercises, with rest periods of 30 seconds between sets. By following this plan, individuals at an intermediate fitness level can challenge their abs and work towards achieving a more defined and shredded abdominal appearance.',
        exercises: [
            {
                ...absEx[15],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[16],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[17],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[0],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[1],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[10],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[11],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[15],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[16],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[17],
                reps: 10,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[0],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[1],
                reps: 14,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[10],
                reps: 12,
                type: 'work'
            },
            {
                type: 'rest',
                time: 30
            },
            {
                ...absEx[11],
                reps: 12,
                type: 'work'
            }
        ]
    }
]