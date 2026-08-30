const gif = (id) => `https://static.exercisedb.dev/media/${id}.gif`;

const WEEK = {
  number: 5,
  title: "Week 5",
  subtitle: "Open a day, then open any exercise to watch the movement.",
  days: [
    {
      id: "monday",
      label: "Monday",
      short: "Mon",
      focus: "Glutes & Hamstring",
      accent: "#e8c547",
      sections: [
        {
          name: "Warm-up",
          items: [
            {
              name: "Hamstring scoops",
              rx: "10 each side",
              gif: gif("ZgsNQ6d"),
              shownAs: "Inchworm — same hinge and hamstring walk-out",
              steps: [
                "Stand tall, then hinge from the hips and reach toward the floor.",
                "Walk the hands forward, keeping legs as straight as you can.",
                "Walk the feet back in and repeat, scooping through the hamstrings.",
              ],
            },
            {
              name: "World’s greatest stretch",
              rx: "5 each side",
              gif: gif("DFGXwZr"),
              shownAs: "World’s greatest stretch",
              steps: [
                "Step into a long lunge with the back knee off the floor.",
                "Plant the same-side hand and rotate the other arm to the ceiling.",
                "Drop the elbow inside the front foot, then switch sides.",
              ],
            },
            {
              name: "90/90s",
              rx: "6 each side",
              youtube: "search",
              steps: [
                "Sit with one shin in front (90°) and the other out to the side (90°).",
                "Sit tall over the front hip, then switch both legs to the other side.",
                "Move slowly. Keep the chest up rather than collapsing.",
              ],
            },
            {
              name: "Glute bridge",
              rx: "10",
              gif: gif("u0cNiij"),
              shownAs: "Glute bridge",
              steps: [
                "Lie on your back, feet flat, knees bent.",
                "Squeeze the glutes and lift the hips until shoulders, hips, and knees line up.",
                "Lower with control. Do not arch through the lower back.",
              ],
            },
          ],
        },
        {
          name: "Main strength",
          items: [
            {
              name: "Vertical jump",
              rx: "5-4-3",
              gif: gif("1gFNTZV"),
              shownAs: "Jump squat — same vertical pop",
              steps: [
                "Dip into a quarter squat, arms back.",
                "Drive through the floor and jump as high as you can.",
                "Land softly on the mid-foot and reset before the next rep.",
              ],
            },
            {
              name: "Single-leg box jump",
              rx: "4-4-2-1 each side",
              gif: gif("iPm26QU"),
              shownAs: "Single-leg box jump / stick the landing",
              steps: [
                "Stand on one leg in front of a low box.",
                "Jump up and land on the same leg with a quiet knee.",
                "Step down. Lower the box if the landing is messy.",
              ],
            },
            {
              name: "BB glute bridge",
              rx: "8-8-6",
              gif: gif("qKBpF7I"),
              shownAs: "Barbell glute bridge",
              steps: [
                "Pad a barbell over the hips and plant the feet.",
                "Drive the hips up by squeezing the glutes.",
                "Pause at the top, then lower without the plates slamming.",
              ],
            },
            {
              name: "DB stiff-legged deadlift",
              rx: "10-8-6",
              gif: gif("5eLRITT"),
              shownAs: "Dumbbell stiff-leg deadlift",
              steps: [
                "Hold dumbbells at the thighs, soft knees, proud chest.",
                "Hinge until you feel a hamstring stretch. DBs stay close to the legs.",
                "Stand by driving the hips forward. Do not round the back.",
              ],
            },
            {
              name: "DB glute-biased Bulgarian split squat",
              rx: "8-6-6",
              gif: gif("9E25EOx"),
              shownAs: "Split squat — put the back foot on a bench for the Bulgarian",
              steps: [
                "Back foot on a bench, front foot far enough to keep the shin mostly vertical.",
                "Drop the back knee. Lean the torso slightly forward to bias the glute.",
                "Push through the front heel to stand.",
              ],
            },
          ],
        },
        {
          name: "Accessory / burn",
          note: "Circuit · 3 rounds · 8 min timer",
          items: [
            {
              name: "Curtsy lunge pulses",
              rx: "12 each side",
              gif: gif("9E25EOx"),
              shownAs: "Split squat — for a curtsy, step the back leg behind and across",
              steps: [
                "Stand tall, then step one foot behind and across the other.",
                "Bend both knees into a curtsy. Pulse at the bottom.",
                "Keep the front knee tracking over the toes.",
              ],
            },
            {
              name: "KB swing",
              rx: "10",
              gif: gif("7Ba7bQ2"),
              shownAs: "Kettlebell hip hinge (clean shown) — swing is the same hinge, bell floats to chest",
              youtube: "YSxHifyI6s8",
              steps: [
                "Hike the bell back between the legs like a football snap.",
                "Snap the hips to standing. Arms stay loose; the bell should float to about chest height.",
                "This is a hinge, not a squat, and not an arm raise.",
              ],
            },
            {
              name: "Plate zercher squat march",
              rx: "12 each side",
              gif: gif("GibBPPg"),
              shownAs: "Marching pattern — hold a plate in the elbow crooks (zercher) and march",
              steps: [
                "Hold a plate in the elbows, tucked into the stomach.",
                "Stay in a quarter squat and march, driving one knee up at a time.",
                "Keep the torso tall. 12 steps each side.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "tuesday",
      label: "Tuesday",
      short: "Tue",
      focus: "Chest & Accessory",
      accent: "#e8a0b4",
      sections: [
        {
          name: "Warm-up",
          items: [
            {
              name: "Cat/cow to thoracic opener",
              rx: "6 each side",
              gif: gif("CMAxnsG"),
              shownAs: "Clock / spine reach on all fours",
              youtube: "Kz4ODGkoKzg",
              steps: [
                "On all fours: round the spine (cat), then drop the belly (cow).",
                "Then thread one arm under the body and open it to the ceiling for the thoracic opener.",
                "Move with the breath. 6 each side.",
              ],
            },
            {
              name: "Scap push-ups",
              rx: "12",
              gif: gif("jV65tKx"),
              shownAs: "Scapula push-up",
              steps: [
                "Hold a high plank. Arms stay straight.",
                "Let the chest sink by pinching the shoulder blades, then push the floor away to spread them.",
                "Only the scapulae move. No elbow bend.",
              ],
            },
            {
              name: "Shoulder rotation clock & anticlockwise",
              rx: "1 each way",
              youtube: "search",
              steps: [
                "Arms out to the sides, small circles forward (clock).",
                "Reverse the circles (anticlockwise).",
                "Keep ribs down so the neck stays relaxed.",
              ],
            },
            {
              name: "Push-up",
              rx: "8",
              gif: gif("i5cEhka"),
              shownAs: "Push-up",
              steps: [
                "Plank on hands. Body in one line.",
                "Lower chest toward the floor, elbows about 45° from the body.",
                "Press up. Drop to knees if 8 clean reps are not there yet.",
              ],
            },
          ],
        },
        {
          name: "Main strength",
          items: [
            {
              name: "BB incline bench press",
              rx: "8-6-4-3",
              note: "50–55% of PR. Same weight. Chase depth, not load.",
              gif: gif("3TZduzM"),
              shownAs: "Barbell incline bench press",
              steps: [
                "Set the bench to a low-moderate incline. Eyes under the bar.",
                "Lower the bar to the upper chest with control.",
                "Press up. Keep the same weight and own the bottom position.",
              ],
            },
            {
              name: "DB floor chest fly",
              rx: "10-8-8",
              gif: gif("neonEDL"),
              shownAs: "Floor fly",
              steps: [
                "Lie on the floor, dumbbells over the chest, slight elbow bend.",
                "Open the arms until the elbows lightly tap the floor.",
                "Hug the weights back together over the chest.",
              ],
            },
            {
              name: "Staggered-stance push-ups",
              rx: "10-8-6 each side",
              gif: gif("13TpY4H"),
              shownAs: "Offset / single-arm bias push-up",
              steps: [
                "Place one hand a few inches forward of the other.",
                "Do push-ups. The back hand takes more load.",
                "Switch the stagger each set.",
              ],
            },
          ],
        },
        {
          name: "Accessory / burn",
          items: [
            {
              name: "DB pullover",
              rx: "8-8-8",
              gif: gif("9XjtHvS"),
              shownAs: "Dumbbell pullover",
              steps: [
                "Lie on a bench. One or two DBs over the chest.",
                "Reach the weight back over the head until you feel a stretch in lats and chest.",
                "Pull it back over the chest without bending the elbows a lot.",
              ],
            },
            {
              name: "Single-arm DB floor chest press",
              rx: "12-10-6 each side",
              gif: gif("84RyJf8"),
              shownAs: "Single-arm press — do this lying on the floor",
              steps: [
                "Lie on the floor with one dumbbell at the chest, free arm out for balance.",
                "Press until the arm is straight. Shoulder stays packed.",
                "Lower until the elbow touches the floor.",
              ],
            },
          ],
        },
        {
          name: "Conditioning",
          note: "AMRAP 7",
          items: [
            {
              name: "V-ups",
              rx: "18",
              gif: gif("mbkgB44"),
              shownAs: "Jackknife / V-up",
              steps: [
                "Lie flat, arms overhead.",
                "Fold so hands and feet meet over the hips.",
                "Lower with control. Bend the knees if the low back peels up.",
              ],
            },
            {
              name: "Russian twist",
              rx: "12",
              gif: gif("fZFZ704"),
              shownAs: "Russian twist",
              steps: [
                "Sit, lean back slightly, feet up or down.",
                "Rotate the torso so hands tap beside each hip.",
                "Move from the ribs, not just the arms. 12 total or 12/side as written.",
              ],
            },
            {
              name: "Flutter kicks",
              rx: "15 each side",
              gif: gif("mbkgB44"),
              shownAs: "Core sit-up pattern — for flutters, keep legs long and alternate small kicks",
              youtube: "search",
              steps: [
                "Lie on your back, hands under the hips if needed.",
                "Lift heels 6–12 inches and flutter opposite legs.",
                "Low back stays glued down.",
              ],
            },
          ],
        },
        {
          name: "Core",
          items: [
            {
              name: "Hollow hold",
              rx: "1 min",
              gif: gif("mbkgB44"),
              shownAs: "Related hollow/jackknife shape — hold the banana position",
              youtube: "search",
              steps: [
                "Press the low back into the floor.",
                "Lift shoulders and legs so the body makes a banana shape.",
                "Hold. Tuck the knees if 1:00 is too long.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "wednesday",
      label: "Wednesday",
      short: "Wed",
      focus: "Arms",
      accent: "#c5b0e0",
      sections: [
        {
          name: "Warm-up",
          items: [
            {
              name: "Dog and bone game",
              rx: "as needed",
              steps: [
                "This is play / a dog warm-up, not a lift.",
                "Get the dog moving with a tug or fetch, then start the human work.",
              ],
            },
            {
              name: "Cat/cow to thoracic opener",
              rx: "6 each side",
              gif: gif("CMAxnsG"),
              youtube: "Kz4ODGkoKzg",
              steps: [
                "All fours: round (cat), arch (cow).",
                "Thread one arm under, then open it to the sky.",
                "6 each side.",
              ],
            },
            {
              name: "Shoulder rotation clock & anticlockwise",
              rx: "10",
              youtube: "search",
              steps: [
                "Arms at shoulder height, circle forward 10, then backward 10.",
                "Start small, then make the circles bigger.",
              ],
            },
            {
              name: "Hindu push-up",
              rx: "8",
              gif: gif("epOSYUZ"),
              shownAs: "Hindu / dive-bomber push-up",
              steps: [
                "Start in a pike (hips high, hands and feet on the floor).",
                "Dive the chest forward toward the floor, then press up into an upward-dog shape.",
                "Push the hips back to the pike and repeat.",
              ],
            },
          ],
        },
        {
          name: "Main strength",
          items: [
            {
              name: "Barbell biceps curl",
              rx: "10-8-8",
              gif: gif("25GPyDY"),
              shownAs: "Barbell curl",
              steps: [
                "Stand, bar in hand, elbows at the sides.",
                "Curl the bar to the shoulders without swinging.",
                "Lower slowly. Full stretch at the bottom.",
              ],
            },
            {
              name: "Banded triceps push-down",
              rx: "12-10-8",
              gif: gif("dU605di"),
              shownAs: "Push-down (cable shown — use a band on a high anchor)",
              steps: [
                "Anchor a band high. Elbows pinned to the ribs.",
                "Extend the arms until they are straight, squeeze the triceps.",
                "Let the hands rise only as far as the elbows stay still.",
              ],
            },
            {
              name: "DB 21 curl",
              rx: "7 + 7 + 7 × 2",
              gif: gif("3s4NnTh"),
              shownAs: "Dumbbell curl — 21s = 7 bottom-half, 7 top-half, 7 full",
              steps: [
                "7 reps from the bottom to halfway.",
                "7 reps from halfway to the top.",
                "7 full curls. That is one 21. Do it twice.",
              ],
            },
          ],
        },
        {
          name: "Accessory / burn",
          items: [
            {
              name: "BB skull crushers",
              rx: "10-8-6",
              gif: gif("h8LFzo9"),
              shownAs: "Barbell skull crusher",
              steps: [
                "Lie on a bench, bar over the chest, elbows pointing up.",
                "Bend only the elbows and lower the bar toward the forehead / hairline.",
                "Extend back to straight arms. Elbows stay in.",
              ],
            },
          ],
        },
        {
          name: "Conditioning",
          note: "EMOM 9",
          items: [
            {
              name: "DB man makers",
              rx: "7",
              gif: gif("0JtKWum"),
              shownAs: "Dumbbell burpee — man maker adds a row in plank and a press at the top",
              steps: [
                "Dumbbells in hand: plank, push-up, row each arm.",
                "Jump the feet in, stand, and press the DBs overhead.",
                "That is 1 rep. Reset and repeat.",
              ],
            },
            {
              name: "Bicycle crunch",
              rx: "20 each side",
              gif: gif("tZkGYZ9"),
              shownAs: "Bicycle crunch",
              steps: [
                "Hands by the head, shoulders off the floor.",
                "Opposite elbow to opposite knee, other leg long.",
                "Rotate through the ribs. 20 each side.",
              ],
            },
            {
              name: "Renegade row",
              rx: "15 each side",
              gif: gif("b9kqlBy"),
              shownAs: "Renegade row",
              steps: [
                "Plank on dumbbells or kettlebells.",
                "Row one weight to the hip without rotating the hips.",
                "Alternate. Wide feet make it easier.",
              ],
            },
          ],
        },
        {
          name: "Core",
          note: "Tabata × 2",
          items: [
            {
              name: "High knees",
              rx: "Tabata",
              gif: gif("ealLwvX"),
              shownAs: "High knees",
              steps: [
                "Run in place, knees toward hip height.",
                "Land light on the balls of the feet.",
                "Tabata: 20s on / 10s off.",
              ],
            },
            {
              name: "Jumping jacks",
              rx: "Tabata",
              gif: gif("1gFNTZV"),
              shownAs: "Jump pattern — jumping jack is jump feet out while arms go overhead",
              youtube: "search",
              steps: [
                "Jump the feet out as the arms rise overhead.",
                "Jump back to start.",
                "Soft knees. Tabata with high knees.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "thursday",
      label: "Thursday",
      short: "Thu",
      focus: "Legs",
      accent: "#9fd4a3",
      sections: [
        {
          name: "Warm-up",
          items: [
            {
              name: "World’s greatest stretch",
              rx: "5 each side",
              gif: gif("DFGXwZr"),
              shownAs: "World’s greatest stretch",
              steps: [
                "Long lunge, back knee up.",
                "Rotate the chest and reach the arm up.",
                "Elbow inside the front foot, then switch.",
              ],
            },
            {
              name: "Adductor opener",
              rx: "5 each side",
              gif: gif("hC6oYY5"),
              shownAs: "Adductor stretch",
              steps: [
                "Kneel or sit and open one leg out to the side.",
                "Shift the hips toward the open side until the inner thigh stretches.",
                "Breathe. 5 each side.",
              ],
            },
            {
              name: "90/90s",
              rx: "6 each side",
              youtube: "search",
              steps: [
                "Sit in 90/90 (front shin and back shin both bent 90°).",
                "Switch sides in a controlled sweep.",
                "Stay tall.",
              ],
            },
            {
              name: "Glute bridge",
              rx: "10",
              gif: gif("u0cNiij"),
              shownAs: "Glute bridge",
              steps: [
                "Feet flat, lift hips by squeezing glutes.",
                "Pause, lower, repeat.",
              ],
            },
          ],
        },
        {
          name: "Main strength",
          items: [
            {
              name: "Broad jump",
              rx: "5-4-3",
              gif: gif("uZKq7lo"),
              shownAs: "Forward jump",
              steps: [
                "Load the hips, swing the arms, jump as far forward as you can.",
                "Stick a quiet landing with knees tracking over toes.",
                "Reset fully between reps.",
              ],
            },
            {
              name: "Zercher squat",
              rx: "8-8-6",
              gif: gif("ZA8b5hc"),
              shownAs: "Goblet squat — same front-loaded squat; Zercher holds the bar in the elbows",
              youtube: "search",
              steps: [
                "Hold the bar in the crooks of the elbows, hugging it to the body.",
                "Sit down between the hips, chest tall.",
                "Stand. If the bar is too much, use a goblet kettlebell as in the GIF.",
              ],
            },
            {
              name: "KB half-kneeling staggered squat",
              rx: "10-8-8 each side",
              gif: gif("9E25EOx"),
              shownAs: "Split squat — hold a KB and use a staggered / half-kneeling stance",
              steps: [
                "Stagger the feet (almost a lunge).",
                "Hold a kettlebell and sit the back knee toward the floor.",
                "Push the front foot to stand. Switch sides.",
              ],
            },
          ],
        },
        {
          name: "Accessory / burn",
          items: [
            {
              name: "Pistol box squat",
              rx: "8-6-4 each side",
              gif: gif("5bpPTHv"),
              shownAs: "Pistol squat — sit to a box instead of going all the way down",
              steps: [
                "Stand on one leg in front of a box.",
                "Reach the other leg forward and sit to the box with control.",
                "Stand back up on the same leg. Lower the box if needed.",
              ],
            },
            {
              name: "Wall squat hold",
              rx: "40 sec × 3",
              gif: gif("yn8yg1r"),
              shownAs: "Squat shape — for the hold, back on a wall, thighs parallel, don’t stand up",
              youtube: "search",
              steps: [
                "Back flat on a wall, walk the feet out.",
                "Slide down until thighs are about parallel.",
                "Hold 40 seconds. Knees over ankles, not past the toes wildly.",
              ],
            },
          ],
        },
        {
          name: "Conditioning",
          note: "Grip strength",
          items: [
            {
              name: "Plate hold",
              rx: "35 sec each side × 3",
              gif: gif("qPEzJjA"),
              shownAs: "Loaded carry / hold — pinch or hold plates at your sides",
              steps: [
                "Hold a plate in each hand (or one at a time) at the side.",
                "Stand tall, shoulders packed, squeeze the plate.",
                "35 seconds each side. No shrugging.",
              ],
            },
          ],
        },
        {
          name: "Core",
          items: [
            {
              name: "Feet-elevated standing calf raises",
              rx: "20 × 3",
              gif: gif("dPmaUaU"),
              shownAs: "Standing calf raise — hang the heels off a step",
              steps: [
                "Stand on a step, heels hanging off.",
                "Rise as high as you can on the toes.",
                "Lower the heels below the step, then repeat 20.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "friday",
      label: "Friday",
      short: "Fri",
      focus: "Back & Shoulder",
      accent: "#f3c0a8",
      sections: [
        {
          name: "Warm-up",
          items: [
            {
              name: "Cat/cow to thoracic opener",
              rx: "6 each side",
              gif: gif("CMAxnsG"),
              youtube: "Kz4ODGkoKzg",
              steps: [
                "Cat/cow on all fours, then open one arm to the ceiling.",
                "6 each side.",
              ],
            },
            {
              name: "World’s greatest stretch",
              rx: "5 each side",
              gif: gif("DFGXwZr"),
              shownAs: "World’s greatest stretch",
              steps: [
                "Lunge, rotate, reach, then elbow inside the front foot.",
              ],
            },
            {
              name: "Reverse snow angel",
              rx: "10",
              gif: gif("Ion0XWz"),
              shownAs: "Prone rear-delt raise — sweep the arms like a reverse snow angel",
              steps: [
                "Lie face down, arms by the hips.",
                "Lift the chest slightly and sweep the arms out and overhead, then back.",
                "Thumbs can point up. Slow, 10 reps.",
              ],
            },
            {
              name: "Scap push-ups",
              rx: "12",
              gif: gif("jV65tKx"),
              shownAs: "Scapula push-up",
              steps: [
                "Straight-arm plank. Sink and push the shoulder blades.",
                "No elbow bend.",
              ],
            },
          ],
        },
        {
          name: "Main strength",
          items: [
            {
              name: "Landmine single-arm bent-over row",
              rx: "10-8-6",
              note: "Barbell in a landmine / corner.",
              gif: gif("aaXr7ld"),
              shownAs: "T-bar / landmine row — use one arm on a landmine",
              steps: [
                "Stick a barbell in a corner or landmine.",
                "Hinge, grab the sleeve with one hand, row to the hip.",
                "Let the shoulder stretch at the bottom. Switch arms.",
              ],
            },
            {
              name: "Half-kneeling single-arm BB shoulder press",
              rx: "10-8-6",
              gif: gif("84RyJf8"),
              shownAs: "Single-arm press — kneel on one knee, press a bar or DB",
              steps: [
                "Half-kneel (one knee down). Opposite or same-side press as you prefer.",
                "Press the bar/DB overhead without leaning.",
                "Lower to the shoulder and repeat. Switch sides.",
              ],
            },
            {
              name: "Half-kneeling band pull",
              rx: "12-10-8 each side",
              gif: gif("G61cXLk"),
              shownAs: "Kneeling rear-delt / face-pull pattern",
              steps: [
                "Half-kneel facing a band at face height.",
                "Pull toward the face / ear, elbows high.",
                "Pause, then reach back to the start.",
              ],
            },
            {
              name: "DB rear delt fly",
              rx: "12-10-8",
              gif: gif("Ion0XWz"),
              shownAs: "Rear-delt raise / reverse fly",
              steps: [
                "Hinge or lie chest-supported.",
                "Raise dumbbells out to the sides with a slight elbow bend.",
                "Lead with the elbows, not a swinging torso.",
              ],
            },
          ],
        },
        {
          name: "Accessory / burn",
          note: "Circuit × 3 rounds",
          items: [
            {
              name: "Pull-ups",
              rx: "5–6 max",
              gif: gif("0V2YQjW"),
              shownAs: "Pull-up",
              steps: [
                "Hang, pull the chest toward the bar.",
                "Chin over, then lower to a full hang.",
                "Use a band or jump to the top if you cannot get 5.",
              ],
            },
            {
              name: "KB upright row",
              rx: "14",
              gif: gif("83HoW9X"),
              shownAs: "Upright row (barbell shown — same path with a KB)",
              steps: [
                "Hold a kettlebell at the thighs.",
                "Pull it up toward the chin, elbows higher than the hands.",
                "Stop at chest height if the shoulders feel pinched.",
              ],
            },
            {
              name: "DB shrugs",
              rx: "14",
              gif: gif("dG7tG5y"),
              shownAs: "Shrug (barbell shown — same move with dumbbells)",
              steps: [
                "Dumbbells at the sides, arms straight.",
                "Shrug the shoulders toward the ears.",
                "Lower slowly. Do not roll the shoulders.",
              ],
            },
          ],
        },
        {
          name: "Conditioning",
          note: "Tabata",
          items: [
            {
              name: "Devil press",
              rx: "Tabata",
              gif: gif("dK9394r"),
              shownAs: "Burpee — devil press is a burpee holding DBs, then snatch them overhead",
              youtube: "jKvasXvO6A0",
              steps: [
                "Hands on dumbbells: burpee to the floor.",
                "Jump the feet in, hike the DBs, and punch them overhead in one motion.",
                "That’s 1 rep. Light bells. Tabata 20/10.",
              ],
            },
            {
              name: "MMA plank",
              rx: "Tabata",
              gif: gif("CosupLu"),
              shownAs: "Plank with rotation — MMA plank adds shoulder taps or hip shifts",
              steps: [
                "Hold a hard plank.",
                "Add shoulder taps or small hip rotations without the hips swaying.",
                "Tabata opposite the devil press.",
              ],
            },
          ],
        },
        {
          name: "Core",
          items: [
            {
              name: "Superman hold",
              rx: "30 sec × 3",
              gif: gif("4GqRrAk"),
              shownAs: "Prone extension — for the hold, lift arms and legs and stay there",
              youtube: "search",
              steps: [
                "Lie face down.",
                "Lift chest, arms, and legs off the floor like Superman flying.",
                "Hold 30 seconds. Keep the neck long.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "post-friday",
      label: "Post Friday",
      short: "Post Fri",
      focus: "Instagram reels",
      accent: "#ef8fb4",
      instagram: "https://www.instagram.com/p/DcgqMUSFovT/?img_index=5",
      instagramPermalink: "https://www.instagram.com/p/DcgqMUSFovT/",
      sections: [],
    },
  ],
};
