import { useState } from "react";
import { ArrowRightIcon, XIcon } from "lucide-react";

type Article = {
    id: number;
    title: string;
    content: string;
};

export const Achievements = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(
        null
    );

    const allArticles: Article[] = [
        {
            id: 1,
            title: "المقابلة مع الصحافي الميداني علي الزين",
            content: `مقابلة مع صحافي ميداني: تغطية الحروب على لبنان والمخاوف التي تعرض لها وأبرز التحديات

المقابلة مع الصحافي الميداني، علي الزين، الذي عمل في تغطية العديد من الحروب التي عصفت بلبنان، لاسيما الحروب الإسرائيلية والحرب الأهلية اللبنانية.

أهلاً بك، علي. نود بداية أن نعرف عن تجربتك في تغطية الحروب على لبنان.

 كيف بدأت مسيرتك في هذا المجال؟

علي الزين: شكرًا على الاستضافة. بدأت مسيرتي الصحافية منذ أكثر من 15 عامًا، وكنت مهتمًا بتغطية الصراعات من أجل نقل الحقيقة وعيش اللحظة كما هي. في البداية، كنت أعمل كمراسل صحفي في مناطق مختلفة من لبنان، ثم تطورت الأمور ووجدت نفسي في قلب الصراعات، حيث عملت بشكل مكثف أثناء الحرب الإسرائيلية على لبنان عام 2006، ثم في تغطية الأحداث خلال الحروب المستمرة والهجمات المتكررة على لبنان.

لا شك أن العمل في مناطق الحروب والمناطق الساخنة يحمل تحديات كبيرة. ما هي أبرز المخاوف التي تعرضت لها أثناء تغطيتك لهذه الحروب؟

علي الزين: الخوف الحقيقي ليس فقط من القذائف أو الهجمات المباشرة، بل من أن تكون هدفًا متعمدًا من الأطراف المتحاربة. من أبرز المخاوف التي تعرضت لها، أنني كنت أعيش تحت تهديد دائم من الطائرات الحربية الإسرائيلية خلال تغطيتي للحرب في 2006، حيث كانت الغارات تدمّر كل شيء في الطريق، حتى وسائل الإعلام. كان هناك لحظات مرعبة عندما كنت أقف أمام مبنى يدمّر بالكامل في وقت قصير جدًا.
الأمر الأكثر رعبًا كان الخوف من الاستهداف المباشر. كنت أعلم أنني في منطقة متوترة، ولا يوجد ضمان بأنني لن أكون هدفًا لهجوم. كنا نعلم أن الصحفيين في مثل هذه الظروف يتعرضون للاستهداف سواء من العدو أو حتى من الأطراف المحلية.

هل كان هناك أي نوع من الحماية التي تلقيتموها كصحفيين أثناء التغطية؟

علي الزين: في الحقيقة، الحماية التي تلقيناها كانت قليلة جدًا. كنا في ميدان القتال، حيث لا يوجد وقت للحديث عن الحماية. في بعض الحالات، كنا نعمل بالتنسيق مع الجهات الدولية والمنظمات التي تعمل على حماية الصحفيين في مناطق النزاع، ولكن في معظم الأحيان كان الصحفيون يُعتبرون مجرد ضحايا إضافية في حرب معقدة. كانت أدواتنا الحماية الأساسية هي دراية ميدانية جيدة بالأماكن التي نغطيها ووجود خطة طوارئ في حال تعرضنا لتهديدات.



 ماذا عن التحديات اللوجستية التي واجهتها أثناء تغطيتك للمعارك؟

علي الزين: التحديات كانت كثيرة جدًا. أولاً، كانت التنقلات في المناطق المتضررة من القصف تشكل خطرًا كبيرًا، سواء بسبب تدمير الطرق أو الحواجز العسكرية التي كانت تمنع الوصول إلى أماكن معينة. ثانيًا، نقص المعدات التقنية في ميدان الحرب كان يشكل تحديًا آخر. في بعض الأحيان، كانت الأجهزة التي نستخدمها مثل الكاميرات وأجهزة الاتصال معرضة للأعطال بسبب تعرضها للغبار أو للمياه أو حتى القصف. في تلك الظروف، كان من الضروري أن تكون سريعًا جدًا في جمع المعلومات، لأن الوضع يتغير بسرعة.

كيف تعاملت مع الضغوط النفسية التي تترافق مع تغطية هذه الحروب؟

علي الزين: الضغط النفسي كان كبيرًا للغاية، فالإعلامي الذي يعمل في هذه الظروف يعيش في حالة من التوتر المستمر. كنا نشهد مآسي لا توصف، من تشريد الناس إلى تدمير المنازل وقتل المدنيين. بالإضافة إلى ذلك، كان من الصعب أن تكون محايدًا تمامًا عندما ترى مشاهد مأساوية على الأرض. كما أن الخوف على الزملاء من الصحفيين كان يشكل ضغطًا إضافيًا. في إحدى المرات، فقدنا أحد الزملاء في انفجار أثناء تغطيته أحد الهجمات، وهو شيء صعب جدًا. ولكن من خلال التضامن بيننا كفريق عمل، كان بالإمكان تحمل الضغوط، حيث كنا نساعد بعضنا البعض في تخطي المواقف العصيبة.

كيف ترى دور الصحافة في مناطق النزاع؟ وهل تعتقد أن هناك تأثيرًا كبيرًا للإعلام في تحريك الرأي العام؟

علي الزين: الصحافة في مناطق النزاع لها دور محوري في نقل الحقيقة. رغم المخاطر، يجب أن تكون الصحافة حاضرة في قلب المعركة لتوثيق الأحداث كما هي. الإعلام ليس فقط أداة لنقل الأخبار، بل هو مسؤول عن تشكيل الرأي العام ورفع الصوت أمام المجتمع الدولي من أجل إيقاف العنف. في لبنان، الصحافة كانت وما زالت جزءًا من النضال الوطني. وفي العديد من الحالات، كان للإعلام دور كبير في فضح الانتهاكات التي تُرتكب، سواء من إسرائيل أو من الأطراف الأخرى.

هل تعرضت لتحديات من القوى السياسية أو العسكرية أثناء تغطيتك؟

علي الزين: نعم، تعرضنا للكثير من الضغوطات. سواء كانت من بعض الجهات المحلية التي كانت تسعى لتوجيه رسائل سياسية عبر الإعلام، أو من الأطراف العسكرية التي كانت تحاول تحديد ما يمكننا تغطيته. في بعض الأحيان، كنا نواجه مواقف صعبة، مثل منعنا من الوصول إلى بعض المواقع أو الضغط علينا لنقل أخبار معينة. ولكننا كصحفيين كنا نؤمن بمهمتنا الأساسية: أن نكون العين التي ترى الحقيقة ونقلها للعالم بغض النظر عن الضغوطات.

في النهاية، كيف ترى مستقبل الصحافة في لبنان في ظل هذه التحديات؟

علي الزين: رغم كل ما شهدناه من تحديات وصعوبات، أعتقد أن الصحافة في لبنان ستظل قوة حية طالما أن هناك من يسعى للبحث عن الحقيقة. نعم، الصحافة تواجه الكثير من الأزمات، مثل التهديدات والرقابة، ولكن الصحفيين اللبنانيين أظهروا مرونة كبيرة في الحفاظ على مهنيتهم. ما نحتاجه اليوم هو مزيد من الدعم للمؤسسات الإعلامية وللصحفيين، سواء محليًا أو دوليًا، لضمان استمرارية الإعلام المستقل والحر في لبنان. الصحافة ليست مجرد وظيفة، بل هي رسالة ومهمة يجب أن تستمر في خدمة الحقيقة.

شكرًا لك، علي، على مشاركتك تجربتك معنا.

علي الزين: شكرًا لكم أيضًا على اهتمامكم.
`,
        },
        {
            id: 2,
            title: `مقابلة مع الصحفي اللبناني في المهجر: تأثير استشهاد الصحافيين اللبنانيين على الإعلام في لبنان`,
            content: `المقابلة مع الصحفي اللبناني، مروان عبدالله، الذي يعمل في الخارج بعد أن قضى سنوات طويلة في تغطية الأحداث في لبنان. تحدث عن تأثير استشهاد الصحافيين اللبنانيين على الإعلام اللبناني وكيفية تأثير ذلك على مستقبل الصحافة في لبنان.

مرحبًا بك مروان. 
نود أن نبدأ بسؤالك عن تجربتك الشخصية في لبنان وتغطيتك للأحداث، وهل كان لاستشهاد الصحافيين اللبنانيين دور كبير في قرارك بالانتقال للعمل في الخارج؟

مروان عبدالله: مرحبًا، شكرًا على الاستضافة. بالطبع، كانت تجربتي في لبنان مليئة بالتحديات واللحظات الصعبة. منذ بداية مسيرتي الصحفية، كنت دائمًا في الميدان، أغطّي الحروب والأحداث السياسية في لبنان. كان هناك شعور دائم بالخوف من الاستهداف، وخاصة مع تصاعد الأحداث في فترة معينة، مثل اغتيالات الصحافيين في بداية الألفية. وفاة زملاء مثل *سمير قصير* و*جبران تويني* كان له تأثير كبير علينا جميعًا. كنت أرى أن استشهاد الصحافيين كان يرسل رسالة بأن الصحافة أصبحت هدفًا مباشرًا في لبنان، وهذا كان مؤلمًا جدًا. بالنسبة لي، هذا كان أحد العوامل التي جعلتني أقرر الانتقال للعمل في المهجر. لم يكن القرار سهلًا، ولكنه كان قرارًا ناتجًا عن الحاجة إلى حماية نفسي في بيئة عمل صعبة.

من وجهة نظرك، كيف أثر استشهاد الصحافيين اللبنانيين على الإعلام في لبنان؟ هل كانت هناك تغييرات ملحوظة؟
مروان عبدالله: نعم، استشهاد الصحافيين كان له تأثير كبير على الإعلام اللبناني بشكل عام. أولاً، من الناحية النفسية، أصبح هناك شعور دائم بالقلق والترقب بين الصحفيين في لبنان. وجود الصحفيين في الميدان أصبح محاطًا بالكثير من المخاطر، مما دفع العديد من الإعلاميين إلى إعادة التفكير في طريقة عملهم. من ناحية أخرى، شهدنا تغييرات على المستوى المهني أيضًا. فقد ظهرت رقابة ذاتية على كثير من الصحافيين، خاصة في ما يتعلق بالقضايا السياسية الحساسة. الصحفيون بدأوا يتجنبون تغطية بعض المواضيع خوفًا من أن يكونوا أهدافًا للانتقام.
من جهة أخرى، زادت أيضًا الضغوط من الجهات السياسية والمسلحة على وسائل الإعلام لتوجيه الرسائل الإعلامية بما يتماشى مع أجندتها. الصحافة اللبنانية التي كانت معروفة باستقلاليتها بدأت تعاني من تدخلات كبيرة من جميع الأطراف السياسية، مما أثر على قدرتها على نقل الحقيقة بشكل حيادي.



هل تعتقد أن الإعلام اللبناني تأثر بالضغوطات التي فرضتها القوى السياسية بعد استشهاد الصحافيين؟

مروان عبدالله: بالتأكيد. بعد استشهاد الصحافيين، وخاصة الشخصيات البارزة مثل *سمير قصير* و*جبران تويني*، شعر الكثير من الإعلاميين في لبنان بوجود قيود أكبر على حرية التعبير. أصبحت بعض الصحف والقنوات تحت الضغط من القوى السياسية المختلفة التي تسعى لإملاء الأجندات الإعلامية. في تلك الفترة، لاحظنا أن هناك تصاعدًا في الرقابة على الأخبار والتغطية الإعلامية، مما أدى إلى تراجع الدور النقدي للإعلام.
بالإضافة إلى ذلك، أصبحت بعض وسائل الإعلام تتعرض لهجمات وتهديدات مباشرة، سواء كانت مادية أو سياسية. في بعض الأحيان، كانت وسائل الإعلام تتعرض للقصف في الحروب أو يتم تدمير مقراتها في الهجمات العسكرية، مما جعل الصحفيين يشعرون بالتهديد المستمر. الإعلام اللبناني أصبح في صراع دائم بين ضرورة توثيق الحقيقة وضغط الأطراف السياسية التي تسعى لتوجيه الرسائل لصالحها.

بما أنك تعمل الآن في الخارج، هل ترى أن الإعلام اللبناني في المهجر يعاني من نفس الضغوطات التي يعاني منها الإعلام في لبنان؟

مروان عبدالله: الإعلام اللبناني في المهجر يعاني من نوع آخر من الضغوطات. في لبنان، الضغوط تكون مباشرة جسديًا وسياسيًا، أما في المهجر فغالبًا ما تتعلق الضغوط بتوجيهات سياسية أو دبلوماسية من الحكومات الأجنبية أو حتى الجاليات اللبنانية في الخارج. الصحافة في المهجر قد تكون أكثر حرية من الصحافة في الداخل، ولكنها أيضًا عرضة لعدة ضغوطات تتعلق بالاستقلالية وحيادها، خاصة إذا كانت تغطي قضايا حساسة مثل النزاعات السياسية في لبنان أو الصراعات الإقليمية.
على الرغم من أن الصحافة في المهجر تحظى بدرجة أكبر من الحرية، إلا أن الصحافيين في الخارج قد يواجهون صعوبة في التأثير على الرأي العام اللبناني في الداخل، بسبب التضييق المستمر على وسائل الإعلام اللبنانية المحلية، والتي تسيطر عليها مجموعات سياسية عديدة. 

بعد كل هذه التحديات والصعوبات، كيف ترى مستقبل الصحافة في لبنان؟
مروان عبدالله: على الرغم من جميع التحديات والصعوبات، أعتقد أن الصحافة في لبنان ستظل قوة حية. لبنان معروف بتاريخه الطويل في مجال الإعلام، والناس في لبنان يمتلكون رغبة قوية في معرفة الحقيقة والوقوف في وجه الظلم. رغم الضغوطات التي تعرض لها الصحافيون، أعتقد أن هناك جيلًا جديدًا من الصحفيين الذين يعملون على استعادة استقلالية الإعلام ونقل الحقيقة بطرق مبتكرة.
لكن مستقبل الصحافة في لبنان يعتمد على قدرتنا على مواجهة الضغوط السياسية، والحفاظ على حرية الإعلام وتوفير بيئة آمنة للصحفيين. لن يكون الأمر سهلًا، لكنني أؤمن أن الصحافة في لبنان ستواصل دورها كمراقب للحكومة والمجتمع، وستظل منصة للحرية والعدالة.



في الختام، ما الرسالة التي تود أن توجهها إلى الصحفيين اللبنانيين في الداخل؟

مروان عبدالله: الرسالة التي أود أن أوجهها لزملائي الصحفيين في لبنان هي أن لا يفقدوا الأمل في دورهم المهم في المجتمع. رغم كل المخاطر، يجب أن تظل الصحافة أداة للحرية، ورغم الضغوط السياسية أو الأمنية، يجب أن يستمر الصحفيون في العمل بضمير حي وإيمان بقوة الكلمة. لا يمكننا أن نسمح بأن يسكتنا القمع أو العنف. الصحافة ليست فقط مهنة، بل هي رسالة يجب أن تُحمل بثبات مهما كانت الظروف.

شكرًا جزيلاً لك، مروان، على وقتك ومشاركتك تجربتك معنا.

مروان عبدالله: شكرًا لكم أيضًا، وأتمنى كل التوفيق للصحفيين اللبنانيين في داخل لبنان وفي الخارج.
`,
        },
    ];
    return (
        <section
            id="articles"
            className="w-full bg-white py-16 md:py-24 relative"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        شهادات حية
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allArticles.map((article) => (
                        <div
                            key={article.id}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {article.title}
                                </h3>

                                <button
                                    onClick={() => setSelectedArticle(article)}
                                    className="inline-flex items-center text-[#323E48] font-medium hover:text-[#323E48]/80"
                                >
                                    اقرأ المزيد{" "}
                                    <ArrowRightIcon
                                        size={16}
                                        className="mr-1 rotate-180"
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedArticle && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl w-full max-w-xl max-h-[80vh] overflow-y-auto mx-4 p-6 relative">
                        <button
                            onClick={() => setSelectedArticle(null)}
                            className="absolute top-3 left-3 text-gray-500 hover:text-gray-700"
                        >
                            <XIcon size={20} />
                        </button>
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">
                            {selectedArticle.title}
                        </h3>
                        <p className="text-gray-700 whitespace-pre-line">
                            {selectedArticle.content}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};
