const quiz = [
    {
        id: 1,
        quiz: 'एक महिला की ओर संकेत करते हुए सुरेश ने कहा यह मेरे दादा की इकलौती पुत्री की पुत्री है सुरेश का उस महिला से क्या संबंध है?',
        option: { A: 'भाई', B: "फुफेरी बहन", C: "चाचा", D: "इनमें से कोई नहीं" },
        ans: "B"
    },
    {
        id: 2,
        quiz: 'एक फोटो की और इशारा करते हुए सुधा ने कहा वह मेरी माता के पिता का इकलौता होता है फोटो वाले आदमी का सुधार से क्या संबंध है?',
        option: { A: 'ममेरा भाई', B: "चाचा", C: "फुफेरी भाई", D: "भाई" },
        ans: "A"
    },
    {
        id: 3,
        quiz: 'एक फोटो की ओर संकेत करते हुए विनोद ने कहा वह मेरी पत्नी की माता की एकमात्र पुत्री की पुत्री है विनोद का फोटो वाली लड़की से क्या संबंध है?',
        option: { A: 'फूफेरा भाई', B: "पिता", C: "चाचा", D: "मामा" },
        ans: "B"
    },
    {
        id: 4,
        quiz: 'तस्वीर में एक लड़की की ओर संकेत करते हुए सुधीर ने कहा यह मेरे नाना की इकलौती संतान का इकलौता पुत्र है वह लड़का सुधीर से किस प्रकार संबंधित है?',
        option: { A: 'स्वयं', B: "भाई", C: "चचेरा भाई", D: "चाचा" },
        ans: "A"
    },
    {
        id: 5,
        quiz: 'मधु ने कहा मेरी माता का इकलौता पुत्र अशोक का कोई पुत्र नहीं है निम्नलिखित में से क्या निष्कर्ष निकाला जा सकता है?',
        option: { A: 'अशोक कि केवल पुत्रियां है', B: "अशोक विवाहित नहीं है", C: "अशोक का पिता नहीं है", D: "इनमें से कोई नहीं" },
        ans: "D"
    },
    {
        id: 6,
        quiz: 'राम रमेश का पिता है वेदवती राम की सास है वेदवती की माता वसुंधरा है जिसका पति हरीश है रमेश का हरिश से क्या संबंध है?',
        option: { A: 'रमेश हरिश का नाती है', B: "हरीश रमेश का परनाना है", C: "रमेश हरीश का भतीजा है", D: "रमेश का हरिश से कोई संबंध नहीं" },
        ans: "B"
    },
    {
        id: 7,
        quiz: 'अरुण कहता है कि यह लड़की मेरी माता के पुत्र की पत्नी है अरुण लड़की का कौन हुआ?',
        option: { A: 'पिता', B: "पिता महा", C: "पति", D: "ससुर" },
        ans: "C"
    },
    {
        id: 8,
        quiz: 'एक पुरुष ने एक महिला का परिचय कराते हुए कहा इसकी मां मेरी सांस की इकलौती पुत्री है उस पुरुष का महिला से क्या संबंध है?',
        option: { A: 'पुत्र', B: "भाई", C: "पोत्र", D: "पिता" },
        ans: "D"
    },
    {
        id: 9,
        quiz: 'M की बहन R है तथा Hका भाई M है K की मां D है तथा M का भाई K है तो R,D से किस प्रकार संबंधित है?',
        option: { A: 'बहन', B: "पुत्री", C: "मां", D: "चाची" },
        ans: "B"
    },
    {
        id: 10,
        quiz: 'T का भाई K है K की मां M है M का भाई W है W का T से क्या संबंध है?',
        option: { A: 'मामा', B: "चाचा", C: "दादा", D: "परदादा" },
        ans: "A"
    },
]

export default function hendler(req, res) {
    try {
        if (req.method !== "POST" && req.method !== "PUT") {
            throw new Error(`${req.method} are not allowed`)
        }
        req.body = JSON.parse(req?.body)
        if (req.method === "POST") {
            const data = quiz.filter((item) => {
                if (item.id === req?.body?.id) {
                    return item
                }
            })

            const filnalQuiz = {
                id: data[0]?.id,
                quiz: data[0]?.quiz,
                option: data[0]?.option,
                total_quiz: quiz.length
            }
            res.status(200).json({
                status: true,
                quiz: filnalQuiz
            })
        }
        else {
            const { answare } = req.body
            console.log(answare)
            let count = 0
            quiz.map((item, index) => {
                if (item.ans === answare[index]?.ans) {
                    count += 1
                }
            })
            res.send({
                status: true,
                point: count,
                total_quiz: quiz.length
            })
        }


    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        })
    }
}