document.addEventListener('DOMContentLoaded', function() {
    // بيانات الدروس
    const lessonsData = {
        multiplication: {
            title: "ضرب الكسور العشرية",
            color: "#9c27b0",
            explanation: `
                <h4>كيفية ضرب الكسور العشرية</h4>
                <p>لضرب كسرين عشريين، نتبع الخطوات التالية:</p>
                <ol>
                    <li>نقوم بضرب الأعداد كما لو كانت أعداد صحيحة (نتجاهل الفاصلة العشرية مؤقتاً)</li>
                    <li>نعد عدد الأرقام بعد الفاصلة في كل من العددين المضروبين</li>
                    <li>نجمع عدد الأرقام بعد الفاصلة في العددين معاً</li>
                    <li>نضع الفاصلة العشرية في الناتج بحيث يكون عدد الأرقام بعدها مساوياً للمجموع الذي حصلنا عليه</li>
                </ol>
                <p><strong>مثال:</strong> 1.2 × 0.3</p>
                <ol>
                    <li>12 × 3 = 36 (تجاهلنا الفاصلة)</li>
                    <li>عدد الأرقام بعد الفاصلة في 1.2 هو 1</li>
                    <li>عدد الأرقام بعد الفاصلة في 0.3 هو 1</li>
                    <li>المجموع: 1 + 1 = 2</li>
                    <li>نضع الفاصلة في الناتج 36 بحيث يكون بعدها رقمين: 0.36</li>
                </ol>
            `,
            solvedExercises: [
                {
                    question: "احسب ناتج ضرب 0.4 × 0.5",
                    solution: "0.2",
                    steps: [
                        "نضرب 4 × 5 = 20 (نتجاهل الفاصلة)",
                        "عدد الأرقام بعد الفاصلة في 0.5 هو 1",
                        "عدد الأرقام بعد الفاصلة في 0.4 هو 1",
                        "المجموع: 1 + 1 = 2",
                        "نضع الفاصلة في الناتج 20 بحيث يكون بعدها رقمين: 0.20 = 0.2"
                    ]
                },
                {
                    question: "احسب ناتج ضرب 0.8 × 1.25",
                    solution: "1",
                    steps: [
                        "نضرب 8 × 125 = 1000 (نتجاهل الفاصلة)",
                        "عدد الأرقام بعد الفاصلة في 1.25 هو 2",
                        "عدد الأرقام بعد الفاصلة في 0.8 هو 1",
                        "المجموع: 1 + 2 = 3",
                        "نضع الفاصلة في الناتج 1000 بحيث يكون بعدها 3 أرقام: 1.000 = 1"
                    ]
                },
                {
                    question: "إذا كان طول مستطيل 3.5 سم وعرضه 2.4 سم، فما هي مساحته؟",
                    solution: "8.4 سم²",
                    steps: [
                        "نحسب المساحة: الطول × العرض = 3.5 × 2.4",
                        "نضرب 35 × 24 = 840 (نتجاهل الفاصلة)",
                        "عدد الأرقام بعد الفاصلة في 3.5 هو 1",
                        "عدد الأرقام بعد الفاصلة في 2.4 هو 1",
                        "المجموع: 1 + 1 = 2",
                        "نضع الفاصلة في الناتج 840 بحيث يكون بعدها رقمين: 8.40 = 8.4"
                    ]
                },
                {
                    question: "اشترى أحمد 2.5 كيلو جرام من التفاح بسعر 4.8 دينار للكيلو، كم دفع أحمد؟",
                    solution: "12 دينار",
                    steps: [
                        "نحسب المبلغ: الكمية × السعر = 2.5 × 4.8",
                        "نضرب 25 × 48 = 1200 (نتجاهل الفاصلة)",
                        "عدد الأرقام بعد الفاصلة في 2.5 هو 1",
                        "عدد الأرقام بعد الفاصلة في 4.8 هو 1",
                        "المجموع: 1 + 1 = 2",
                        "نضع الفاصلة في الناتج 1200 بحيث يكون بعدها رقمين: 12.00 = 12"
                    ]
                },
                {
                    question: "احسب ناتج ضرب 0.2 × 0.04",
                    solution: "0.008",
                    steps: [
                        "نضرب 2 × 4 = 8 (نتجاهل الفاصلة)",
                        "عدد الأرقام بعد الفاصلة في 0.2 هو 1",
                        "عدد الأرقام بعد الفاصلة في 0.04 هو 2",
                        "المجموع: 1 + 2 = 3",
                        "نضع الفاصلة في الناتج 8 بحيث يكون بعدها 3 أرقام: 0.008"
                    ]
                },
                {
                    question: "احسب ناتج ضرب 1.2 × 2.5",
                    solution: "3",
                    steps: [
                        "نضرب 12 × 25 = 300 (نتجاهل الفاصلة)",
                        "عدد الأرقام بعد الفاصلة في 1.2 هو 1",
                        "عدد الأرقام بعد الفاصلة في 2.5 هو 1",
                        "المجموع: 1 + 1 = 2",
                        "نضع الفاصلة في الناتج 300 بحيث يكون بعدها رقمين: 3.00 = 3"
                    ]
                }
            ],
            exercises: [
                {
                    question: "احسب ناتج ضرب 0.3 × 0.7",
                    options: ["0.21", "2.1", "0.021"],
                    correctAnswer: 0,
                    help: "اضرب 3 × 7 = 21، ثم عد الأرقام بعد الفاصلة في كل عدد (1 لكل منهما)، ثم ضع الفاصلة بحيث يكون بعدها رقمين: 0.21"
                },
                {
                    question: "احسب ناتج ضرب 0.6 × 0.05",
                    options: ["0.30", "0.03", "0.003"],
                    correctAnswer: 1,
                    help: "اضرب 6 × 5 = 30، ثم عد الأرقام بعد الفاصلة (1 في 0.6 و 2 في 0.05)، ثم ضع الفاصلة بحيث يكون بعدها 3 أرقام: 0.030 = 0.03"
                },
                {
                    question: "إذا كان سعر كيلو التفاح 3.75 دينار، فكم ثمن 2.5 كيلو؟",
                    options: ["9.375 دينار", "93.75 دينار", "0.9375 دينار"],
                    correctAnswer: 0,
                    help: "اضرب 3.75 × 2.5: 375 × 25 = 9375، ثم ضع الفاصلة بحيث يكون بعدها 3 أرقام (2 في 3.75 و 1 في 2.5): 9.375"
                },
                {
                    question: "احسب ناتج ضرب 1.5 × 0.08",
                    options: ["0.12", "1.2", "0.012"],
                    correctAnswer: 0,
                    help: "اضرب 15 × 8 = 120، ثم عد الأرقام بعد الفاصلة (1 في 1.5 و 2 في 0.08)، ثم ضع الفاصلة بحيث يكون بعدها 3 أرقام: 0.120 = 0.12"
                },
                {
                    question: "إذا كان طول صندوق 1.8 متر وعرضه 0.9 متر، فما هي مساحته؟",
                    options: ["1.62 م²", "16.2 م²", "0.162 م²"],
                    correctAnswer: 0,
                    help: "اضرب 1.8 × 0.9: 18 × 9 = 162، ثم ضع الفاصلة بحيث يكون بعدها رقمين (1 في كل عدد): 1.62"
                },
                {
                    question: "احسب ناتج ضرب 0.25 × 0.4",
                    options: ["0.1", "1.0", "0.01"],
                    correctAnswer: 0,
                    help: "اضرب 25 × 4 = 100، ثم عد الأرقام بعد الفاصلة (2 في 0.25 و 1 في 0.4)، ثم ضع الفاصلة بحيث يكون بعدها 3 أرقام: 0.100 = 0.1"
                }
            ]
        },
        division: {
            title: "قسمة الكسور العشرية",
            color: "#6a3093",
            explanation: `
                <h4>كيفية قسمة الكسور العشرية</h4>
                <p>لقسمة كسر عشري على آخر، نتبع الخطوات التالية:</p>
                <ol>
                    <li>نحرك الفاصلة العشرية في المقسوم عليه (العدد الذي نقسم عليه) لليمين حتى يصبح عدداً صحيحاً</li>
                    <li>نحرك الفاصلة العشرية في المقسوم (العدد الذي يتم قسمته) بنفس عدد المرات إلى اليمين</li>
                    <li>نقوم بعملية القسمة الطويلة كما نعرفها على الأعداد الصحيحة</li>
                    <li>نضع الفاصلة العشرية في الناتج فوق الفاصلة في المقسوم بعد تحريكها</li>
                </ol>
                <p><strong>مثال:</strong> 0.6 ÷ 0.2</p>
                <ol>
                    <li>نحرك الفاصلة في المقسوم عليه (0.2) مكان واحد لليمين: تصبح 2</li>
                    <li>نحرك الفاصلة في المقسوم (0.6) مكان واحد لليمين: تصبح 6</li>
                    <li>نقوم بالقسمة: 6 ÷ 2 = 3</li>
                    <li>الناتج هو 3</li>
                </ol>
            `,
            solvedExercises: [
                {
                    question: "احسب ناتج قسمة 0.6 ÷ 0.2",
                    solution: "3",
                    steps: [
                        "تحريك الفاصلة في المقسوم عليه (0.2) مكان واحد لليمين: 2",
                        "تحريك الفاصلة في المقسوم (0.6) مكان واحد لليمين: 6",
                        "6 ÷ 2 = 3"
                    ]
                },
                {
                    question: "احسب ناتج قسمة 4.5 ÷ 0.15",
                    solution: "30",
                    steps: [
                        "تحريك الفاصلة في المقسوم عليه (0.15) مكانين لليمين: 15",
                        "تحريك الفاصلة في المقسوم (4.5) مكانين لليمين: 450",
                        "450 ÷ 15 = 30"
                    ]
                },
                {
                    question: "إذا كان طول قطعة قماش 4.8 متر وُشطرت إلى قطع طول كل منها 0.6 متر، فكم عدد القطع؟",
                    solution: "8 قطع",
                    steps: [
                        "نحسب عدد القطع: الطول الكلي ÷ طول القطعة = 4.8 ÷ 0.6",
                        "تحريك الفاصلة في المقسوم عليه (0.6) مكان واحد لليمين: 6",
                        "تحريك الفاصلة في المقسوم (4.8) مكان واحد لليمين: 48",
                        "48 ÷ 6 = 8"
                    ]
                },
                {
                    question: "اشترى خالد 3.6 كيلو جرام من السكر بمبلغ 7.2 دينار، كم سعر الكيلو جرام الواحد؟",
                    solution: "2 دينار",
                    steps: [
                        "نحسب السعر: المبلغ الكلي ÷ الكمية = 7.2 ÷ 3.6",
                        "تحريك الفاصلة في المقسوم عليه (3.6) مكان واحد لليمين: 36",
                        "تحريك الفاصلة في المقسوم (7.2) مكان واحد لليمين: 72",
                        "72 ÷ 36 = 2"
                    ]
                },
                {
                    question: "احسب ناتج قسمة 0.12 ÷ 0.144",
                    solution: "0.833...",
                    steps: [
                        "تحريك الفاصلة في المقسوم عليه (0.144) ثلاثة أماكن لليمين: 144",
                        "تحريك الفاصلة في المقسوم (0.12) ثلاثة أماكن لليمين: 120",
                        "120 ÷ 144 = 0.833..."
                    ]
                },
                {
                    question: "احسب ناتج قسمة 0.3 ÷ 1.2",
                    solution: "0.25",
                    steps: [
                        "تحريك الفاصلة في المقسوم عليه (1.2) مكان واحد لليمين: 12",
                        "تحريك الفاصلة في المقسوم (0.3) مكان واحد لليمين: 3",
                        "3 ÷ 12 = 0.25"
                    ]
                }
            ],
            exercises: [
                {
                    question: "احسب ناتج قسمة 0.3 ÷ 1.2",
                    options: ["0.25", "2.5", "0.4"],
                    correctAnswer: 0,
                    help: "حرك الفاصلة في كلا العددين مكان واحد لليمين: 3 ÷ 12 = 0.25"
                },
                {
                    question: "احسب ناتج قسمة 0.25 ÷ 0.75",
                    options: ["0.333...", "3", "0.3"],
                    correctAnswer: 0,
                    help: "حرك الفاصلة في كلا العددين مكانين لليمين: 25 ÷ 75 = 0.333..."
                },
                {
                    question: "إذا كان متوسط سرعة سيارة 85.5 كم/ساعة، فكم تقطع في 2.5 ساعة؟",
                    options: ["213.75 كم", "21.375 كم", "34.2 كم"],
                    correctAnswer: 0,
                    help: "المسافة = السرعة × الزمن = 85.5 × 2.5 = 213.75 كم"
                },
                {
                    question: "احسب ناتج قسمة 0.12 ÷ 0.144",
                    options: ["0.833...", "8.33", "0.0833..."],
                    correctAnswer: 0,
                    help: "حرك الفاصلة في كلا العددين ثلاثة أماكن لليمين: 120 ÷ 144 = 0.833..."
                },
                {
                    question: "إذا كان عمر أحمد 12.5 سنة وعمر أخيه 8.75 سنة، فما الفرق بين عمرهم؟",
                    options: ["3.75 سنة", "37.5 سنة", "0.375 سنة"],
                    correctAnswer: 0,
                    help: "الفرق = 12.5 - 8.75 = 3.75 سنة"
                },
                {
                    question: "احسب ناتج قسمة 0.8 ÷ 0.04",
                    options: ["20", "2", "0.2"],
                    correctAnswer: 0,
                    help: "حرك الفاصلة في كلا العددين مكانين لليمين: 80 ÷ 4 = 20"
                }
            ]
        },
        measurement: {
            title: "القياس وتطبيقات العمليات",
            color: "#3f51b5",
            explanation: `
                <h4>تطبيقات الكسور العشرية في القياس</h4>
                <p>تستخدم الكسور العشرية بكثرة في القياسات المختلفة مثل الطول، الوزن، الحجم والزمن. إليك بعض التحويلات الشائعة:</p>
                
                <div class="conversion-table">
                    <table>
                        <tr>
                            <th>التحويل</th>
                            <th>المعامل</th>
                            <th>مثال</th>
                        </tr>
                        <tr>
                            <td>من متر إلى سنتيمتر</td>
                            <td>× 100</td>
                            <td>1.5 م = 150 سم</td>
                        </tr>
                        <tr>
                            <td>من كيلوجرام إلى جرام</td>
                            <td>× 1000</td>
                            <td>2.3 كج = 2300 جم</td>
                        </tr>
                        <tr>
                            <td>من لتر إلى مليلتر</td>
                            <td>× 1000</td>
                            <td>0.75 ل = 750 مل</td>
                        </tr>
                        <tr>
                            <td>من ساعة إلى دقيقة</td>
                            <td>× 60</td>
                            <td>1.5 ساعة = 90 دقيقة</td>
                        </tr>
                    </table>
                </div>
                
                <p><strong>مثال تطبيقي:</strong></p>
                <p>إذا كان طول حبل 3.75 متر فكم يساوي بالسنتيمتر؟</p>
                <ol>
                    <li>نعلم أن 1 متر = 100 سنتيمتر</li>
                    <li>لذا نضرب طول الحبل بالمتر في 100: 3.75 × 100</li>
                    <li>عند ضرب عدد عشري في 100 نحرك الفاصلة مكانين لليمين: 3.75 → 375</li>
                    <li>إذاً: 3.75 م = 375 سم</li>
                </ol>
            `,
            solvedExercises: [
                {
                    question: "إذا كان طول حبل 3.75 متر فكم يساوي بالسنتيمتر؟",
                    solution: "375 سم",
                    steps: [
                        "1 متر = 100 سم",
                        "3.75 × 100 = 375 سم"
                    ]
                },
                {
                    question: "اشترت سارة 3.5 كيلوجرام من التفاح و 2.75 كيلوجرام من البرتقال و 1.25 كيلوجرام من الموز. كم مجموع ما اشترته بالجرام؟",
                    solution: "7500 جم",
                    steps: [
                        "نجمع الكميات أولاً بالكيلوجرام: 3.5 + 2.75 + 1.25 = 7.5 كج",
                        "1 كيلوجرام = 1000 جرام",
                        "7.5 × 1000 = 7500 جم"
                    ]
                },
                {
                    question: "إذا كان طول سلك 4.8 متر وقطع منه 3 قطع متساوية، فكم طول كل قطعة؟",
                    solution: "1.6 م",
                    steps: [
                        "نقسم الطول الكلي على عدد القطع: 4.8 ÷ 3",
                        "4.8 ÷ 3 = 1.6 م"
                    ]
                },
                {
                    question: "إذا كان سعر كيلو التفاح 2.75 دينار، فكم ثمن 3.5 كيلو؟",
                    solution: "9.625 دينار",
                    steps: [
                        "نضرب الكمية في السعر: 3.5 × 2.75",
                        "35 × 275 = 9625",
                        "عدد الأرقام بعد الفاصلة: 1 + 2 = 3",
                        "نضع الفاصلة: 9.625 دينار"
                    ]
                },
                {
                    question: "إذا كان متوسط سرعة سيارة 85.5 كم/ساعة، فكم تقطع في 2.5 ساعة؟",
                    solution: "213.75 كم",
                    steps: [
                        "المسافة = السرعة × الزمن = 85.5 × 2.5",
                        "855 × 25 = 21375",
                        "عدد الأرقام بعد الفاصلة: 1 + 1 = 2",
                        "نضع الفاصلة: 213.75 كم"
                    ]
                },
                {
                    question: "إذا كان طول صندوق 1.2 متر وعرضه 0.8 متر وارتفاعه 0.5 متر، فما حجمه؟",
                    solution: "0.48 م³",
                    steps: [
                        "الحجم = الطول × العرض × الارتفاع = 1.2 × 0.8 × 0.5",
                        "12 × 8 = 96",
                        "96 × 5 = 480",
                        "عدد الأرقام بعد الفاصلة: 1 + 1 + 1 = 3",
                        "نضع الفاصلة: 0.480 = 0.48 م³"
                    ]
                }
            ],
            exercises: [
                {
                    question: "إذا كان طول سلك 4.8 متر وقطع منه 3 قطع متساوية، فكم طول كل قطعة؟",
                    options: ["1.6 م", "16 م", "0.16 م"],
                    correctAnswer: 0,
                    help: "اقسم الطول الكلي على عدد القطع: 4.8 ÷ 3 = 1.6 م"
                },
                {
                    question: "إذا كان سعر كيلو التفاح 2.75 دينار، فكم ثمن 3.5 كيلو؟",
                    options: ["9.625 دينار", "96.25 دينار", "0.9625 دينار"],
                    correctAnswer: 0,
                    help: "اضرب الكمية في السعر: 3.5 × 2.75 = 9.625 دينار"
                },
                {
                    question: "إذا كان متوسط سرعة سيارة 85.5 كم/ساعة، فكم تقطع في 2.5 ساعة؟",
                    options: ["213.75 كم", "21.375 كم", "34.2 كم"],
                    correctAnswer: 0,
                    help: "المسافة = السرعة × الزمن = 85.5 × 2.5 = 213.75 كم"
                },
                {
                    question: "إذا كان طول صندوق 1.2 متر وعرضه 0.8 متر وارتفاعه 0.5 متر، فما حجمه؟",
                    options: ["0.48 م³", "4.8 م³", "0.048 م³"],
                    correctAnswer: 0,
                    help: "الحجم = الطول × العرض × الارتفاع = 1.2 × 0.8 × 0.5 = 0.48 م³"
                },
                {
                    question: "إذا كان عمر أحمد 12.5 سنة وعمر أخيه 8.75 سنة، فما الفرق بين عمرهم؟",
                    options: ["3.75 سنة", "37.5 سنة", "0.375 سنة"],
                    correctAnswer: 0,
                    help: "الفرق = 12.5 - 8.75 = 3.75 سنة"
                },
                {
                    question: "تحويل 2.3 كيلوجرام إلى جرام",
                    options: ["2300 جم", "230 جم", "23 جم"],
                    correctAnswer: 0,
                    help: "1 كيلوجرام = 1000 جرام، لذا 2.3 × 1000 = 2300 جم"
                }
            ]
        }
    };

    // عناصر DOM
    const authContainer = document.getElementById('auth-container');
    const mainContainer = document.getElementById('main-container');
    const lessonContainer = document.getElementById('lesson-container');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const startLessonBtns = document.querySelectorAll('.start-lesson-btn');
    const backBtn = document.querySelector('.back-btn');
    const logoutBtn = document.querySelector('.logout-btn');
    const notificationContainer = document.getElementById('notification-container');
    const calculatorHelp = document.getElementById('calculator-help');
    const calculateBtn = document.getElementById('calculate-btn');
    const showStepsCheckbox = document.getElementById('show-steps-checkbox');
    const calculatorResult = document.getElementById('calculator-result');
    const calculatorExpression = document.getElementById('calculator-expression');

    // حالة التطبيق
    let currentUser = null;
    let currentLesson = null;
    let currentExerciseIndex = 0;
    let userProgress = {
        multiplication: { completed: 0, score: 0 },
        division: { completed: 0, score: 0 },
        measurement: { completed: 0, score: 0 }
    };

    // تهيئة التطبيق
    init();

    function init() {
        // تحميل التقدم المحفوظ
        const savedProgress = localStorage.getItem('userProgress');
        if (savedProgress) {
            userProgress = JSON.parse(savedProgress);
        }

        // أحداث التسجيل
        loginTab.addEventListener('click', () => switchAuthTab('login'));
        registerTab.addEventListener('click', () => switchAuthTab('register'));
        
        loginForm.addEventListener('submit', handleLogin);
        registerForm.addEventListener('submit', handleRegister);
        
        // أحداث الدروس
        startLessonBtns.forEach(btn => {
            btn.addEventListener('click', startLesson);
        });
        
        backBtn.addEventListener('click', goBackToMain);
        logoutBtn.addEventListener('click', logout);
        
        // أحداث الآلة الحاسبة
        calculateBtn.addEventListener('click', calculateExpression);
        calculatorExpression.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                calculateExpression();
            }
        });

        // إنشاء العناصر العائمة
        createFloatingElements();
    }

    function switchAuthTab(tab) {
        if (tab === 'login') {
            loginTab.classList.add('active');
            registerTab.classList.remove('active');
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        } else {
            loginTab.classList.remove('active');
            registerTab.classList.add('active');
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        }
    }

    function handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // هنا يمكنك إضافة التحقق من صحة البيانات مع الخادم
        // في هذا المثال، سنفترض أن التسجيل ناجح دائمًا
        
        currentUser = {
            name: "آية",
            email: email,
            avatar: "avatar1.png"
        };
        
        showNotification('success', 'تم تسجيل الدخول بنجاح', 'مرحباً بكِ في منصتي الرياضية!');
        showMainScreen();
    }

    function handleRegister(e) {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const avatar = document.querySelector('.avatar-option.selected').getAttribute('data-avatar');
        
        // هنا يمكنك إضافة إرسال البيانات إلى الخادم
        // في هذا المثال، سنفترض أن التسجيل ناجح دائمًا
        
        currentUser = {
            name: name,
            email: email,
            avatar: `avatar${avatar}.png`
        };
        
        showNotification('success', 'تم إنشاء الحساب بنجاح', `مرحباً ${name} في منصتي الرياضية!`);
        showMainScreen();
    }

    function showMainScreen() {
        authContainer.style.display = 'none';
        mainContainer.style.display = 'block';
        
        // تحديث معلومات المستخدم
        document.getElementById('username-display').textContent = currentUser.name;
        document.getElementById('user-avatar').src = currentUser.avatar;
        
        // تحديث التقدم
        updateProgress();
    }

    function updateProgress() {
        // حساب النسبة المئوية للتقدم الكلي
        const totalCompleted = userProgress.multiplication.completed + 
                             userProgress.division.completed + 
                             userProgress.measurement.completed;
        const totalExercises = 18; // 6 تمارين لكل درس × 3 دروس
        const progressPercent = Math.round((totalCompleted / totalExercises) * 100);
        
        // تحديث شريط التقدم
        document.querySelector('.progress-fill').style.width = `${progressPercent}%`;
        document.querySelector('.progress-text').textContent = `${progressPercent}% مكتمل`;
        
        // تحديث النقاط
        const totalPoints = userProgress.multiplication.score + 
                          userProgress.division.score + 
                          userProgress.measurement.score;
        document.getElementById('user-points').textContent = `${totalPoints} نقطة`;
        
        // تحديث النجوم لكل درس
        updateLessonStars('multiplication', userProgress.multiplication.completed);
        updateLessonStars('division', userProgress.division.completed);
        updateLessonStars('measurement', userProgress.measurement.completed);
        
        // التحقق من الإنجازات
        checkAchievements();
    }

    function updateLessonStars(lessonId, completed) {
        const starsContainer = document.querySelector(`#${lessonId}-card .stars`);
        const stars = starsContainer.querySelectorAll('span');
        
        const filledStars = Math.floor(completed / 2); // كل نجمة تمثل تمرينين
        stars.forEach((star, index) => {
            if (index < filledStars) {
                star.textContent = '★';
            } else {
                star.textContent = '☆';
            }
        });
    }

    function checkAchievements() {
        const achievements = document.querySelectorAll('.achievement');
        
        // إنجاز درس الضرب
        if (userProgress.multiplication.completed >= 6) {
            achievements[0].classList.add('unlocked');
            achievements[0].classList.remove('locked');
        }
        
        // إنجاز درس القسمة
        if (userProgress.division.completed >= 6) {
            achievements[1].classList.add('unlocked');
            achievements[1].classList.remove('locked');
        }
        
        // إنجاز درس القياس
        if (userProgress.measurement.completed >= 6) {
            achievements[2].classList.add('unlocked');
            achievements[2].classList.remove('locked');
        }
    }

    function startLesson(e) {
        const lessonCard = e.target.closest('.lesson-card');
        const lessonId = lessonCard.getAttribute('data-lesson');
        
        currentLesson = lessonId;
        currentExerciseIndex = 0;
        
        // تحميل محتوى الدرس
        loadLessonContent(lessonId);
        
        // الانتقال إلى صفحة الدرس
        mainContainer.style.display = 'none';
        lessonContainer.style.display = 'block';
    }

    function loadLessonContent(lessonId) {
        const lesson = lessonsData[lessonId];
        
        // تحديث عنوان الدرس
        document.getElementById('lesson-title').textContent = lesson.title;
        
        // تحميل الشرح
        document.getElementById('explanation-content').innerHTML = lesson.explanation;
        
        // تحميل التمارين المحلولة
        const solvedExercisesContainer = document.getElementById('solved-exercises');
        solvedExercisesContainer.innerHTML = '';
        
        lesson.solvedExercises.forEach((exercise, index) => {
            const exerciseElement = document.createElement('div');
            exerciseElement.className = 'solved-exercise';
            exerciseElement.innerHTML = `
                <h4>تمرين ${index + 1} <span class="exercise-icon">📝</span></h4>
                <div class="exercise-question">${exercise.question}</div>
                <div class="exercise-solution">
                    ${exercise.steps.map(step => `<div class="exercise-step">${step}</div>`).join('')}
                    <div class="final-answer">الجواب النهائي: ${exercise.solution}</div>
                </div>
            `;
            solvedExercisesContainer.appendChild(exerciseElement);
        });
        
        // تحميل التمارين التفاعلية
        loadNextExercise();
        
        // تحديث تقدم الدرس
        updateLessonProgress();
    }

    function loadNextExercise() {
        const exercise = lessonsData[currentLesson].exercises[currentExerciseIndex];
        const exerciseContainer = document.getElementById('exercise-container');
        
        exerciseContainer.innerHTML = `
            <div class="exercise-question">${exercise.question}</div>
            <div class="options-container">
                ${exercise.options.map((option, index) => `
                    <button class="option-btn" data-index="${index}">${option}</button>
                `).join('')}
            </div>
            <button class="help-btn" id="help-btn">هل تحتاجين مساعدة؟</button>
        `;
        
        // إضافة أحداث الخيارات
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', checkAnswer);
        });
        
        // حدث زر المساعدة
        document.getElementById('help-btn').addEventListener('click', showHelp);
    }

    function checkAnswer(e) {
        const selectedIndex = parseInt(e.target.getAttribute('data-index'));
        const exercise = lessonsData[currentLesson].exercises[currentExerciseIndex];
        const options = document.querySelectorAll('.option-btn');
        
        // تعطيل جميع الأزرار
        options.forEach(btn => {
            btn.disabled = true;
        });
        
        // التحقق من الإجابة
        if (selectedIndex === exercise.correctAnswer) {
            // إجابة صحيحة
            e.target.classList.add('correct');
            showNotification('success', 'أحسنتِ!', 'إجابة صحيحة، أنتِ ممتازة!');
            
            // زيادة النقاط
            userProgress[currentLesson].score += 10;
            
            // الانتقال إلى التمرين التالي بعد تأخير
            setTimeout(() => {
                moveToNextExercise();
            }, 1500);
        } else {
            // إجابة خاطئة
            e.target.classList.add('incorrect');
            options[exercise.correctAnswer].classList.add('correct');
            showNotification('error', 'خطأ', 'الإجابة غير صحيحة، حاولي مرة أخرى أو استخدمي الآلة الحاسبة للمساعدة');
            
            // عرض زر المساعدة
            document.getElementById('help-btn').style.display = 'inline-flex';
        }
        
        // حفظ التقدم
        localStorage.setItem('userProgress', JSON.stringify(userProgress));
    }

    function moveToNextExercise() {
        currentExerciseIndex++;
        userProgress[currentLesson].completed++;
        
        // التحقق من انتهاء التمارين
        if (currentExerciseIndex >= lessonsData[currentLesson].exercises.length) {
            showNotification('success', 'تهانينا!', `أكملتِ جميع تمارين ${lessonsData[currentLesson].title} بنجاح!`);
            
            // العودة إلى الصفحة الرئيسية بعد تأخير
            setTimeout(() => {
                goBackToMain();
            }, 2000);
        } else {
            // تحميل التمرين التالي
            loadNextExercise();
        }
        
        // تحديث التقدم
        updateLessonProgress();
        updateProgress();
    }

    function updateLessonProgress() {
        const progressText = `${currentExerciseIndex}/${lessonsData[currentLesson].exercises.length} تمارين`;
        document.getElementById('lesson-progress-text').textContent = progressText;
        
        const progressPercent = (currentExerciseIndex / lessonsData[currentLesson].exercises.length) * 100;
        document.querySelector('.lesson-progress .progress-fill').style.width = `${progressPercent}%`;
    }

    function showHelp() {
        const exercise = lessonsData[currentLesson].exercises[currentExerciseIndex];
        showNotification('info', 'مساعدة', exercise.help);
        
        // عرض الآلة الحاسبة
        calculatorHelp.classList.remove('hidden');
    }

    function calculateExpression() {
        const expression = calculatorExpression.value.trim();
        
        if (!expression) {
            showNotification('error', 'خطأ', 'الرجاء إدخال مسألة رياضية');
            return;
        }
        
        try {
            // في تطبيق حقيقي، يجب استخدام محلل رياضي آمن
            // هنا نستخدم eval فقط لأغراض العرض التوضيحي
            const result = eval(expression.replace(/×/g, '*').replace(/÷/g, '/'));
            
            let resultHTML = `
                <h5>نتيجة الحساب</h5>
                <div class="expression">${expression} = <span class="final-answer">${result}</span></div>
            `;
            
            if (showStepsCheckbox.checked) {
                const exercise = lessonsData[currentLesson].exercises[currentExerciseIndex];
                resultHTML += `
                    <div class="calculation-steps">
                        <h5>خطوات الحل:</h5>
                        ${exercise.help.split('\n').map(step => `<div class="calculation-step">${step}</div>`).join('')}
                    </div>
                `;
            }
            
            calculatorResult.innerHTML = resultHTML;
            calculatorResult.classList.remove('hidden');
            
        } catch (e) {
            showNotification('error', 'خطأ', 'تعذر حل المسألة، يرجى التأكد من كتابتها بشكل صحيح');
        }
    }

    function goBackToMain() {
        lessonContainer.style.display = 'none';
        calculatorHelp.classList.add('hidden');
        calculatorResult.classList.add('hidden');
        mainContainer.style.display = 'block';
    }

    function logout() {
        currentUser = null;
        authContainer.style.display = 'flex';
        mainContainer.style.display = 'none';
        
        // إعادة تعيين نماذج التسجيل
        loginForm.reset();
        registerForm.reset();
    }

    function showNotification(type, title, message) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✗' : 'i'}</div>
            <div class="notification-content">
                <div class="notification-title">${title}</div>
                <div class="notification-message">${message}</div>
            </div>
            <button class="close-notification">×</button>
        `;
        
        notification.querySelector('.close-notification').addEventListener('click', () => {
            notification.remove();
        });
        
        notificationContainer.appendChild(notification);
        
        // إزالة الإشعار بعد 3 ثواني
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    function createFloatingElements() {
        const container = document.querySelector('.floating-elements');
        const mathSymbols = ['+', '-', '×', '÷', '0.5', '1.2', '3.7', '2.4', '0.25', '0.75'];
        
        for (let i = 0; i < 15; i++) {
            const element = document.createElement('div');
            element.className = 'float-element';
            element.textContent = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
            
            // مواضع وأحجام عشوائية
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const size = Math.random() * 1.5 + 0.5;
            const opacity = Math.random() * 0.3 + 0.1;
            const duration = Math.random() * 15 + 10;
            const delay = Math.random() * 10;
            
            element.style.left = `${left}%`;
            element.style.top = `${top}%`;
            element.style.fontSize = `${size}rem`;
            element.style.opacity = opacity;
            element.style.animationDuration = `${duration}s`;
            element.style.animationDelay = `${delay}s`;
            
            container.appendChild(element);
        }
    }

    // إنشاء جسيمات للبطاقات
    function createCardParticles() {
        const cards = document.querySelectorAll('.lesson-card');
        
        cards.forEach(card => {
            const particleContainer = card.querySelector('.card-particles');
            
            for (let i = 0; i < 10; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // أحجام وألوان عشوائية
                const size = Math.random() * 6 + 2;
                const color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
                const opacity = Math.random() * 0.5 + 0.1;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.backgroundColor = color;
                particle.style.opacity = opacity;
                
                // مواضع عشوائية داخل الحاوية
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // رسوم متحركة
                particle.style.animation = `floatParticle ${Math.random() * 10 + 5}s infinite ease-in-out`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                
                particleContainer.appendChild(particle);
            }
        });
    }

    // إضافة CSS للجسيمات
    const style = document.createElement('style');
    style.textContent = `
        .particle {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
        }
        
        @keyframes floatParticle {
            0% { transform: translate(0, 0); }
            50% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px); }
            100% { transform: translate(0, 0); }
        }
    `;
    document.head.appendChild(style);

    // إنشاء جسيمات للبطاقات عند التحميل
    createCardParticles();
});
