let articulos = [
    {
        id: 0,
        brand: "Nike",
        model: "Air Jordan 1 Mid SE Craft",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/nike/AirJordanMidSECraft-1.webp",
            two: "img/zapatillas/nike/AirJordanMidSECraft-2.webp",
            three: "img/zapatillas/nike/AirJordanMidSECraft-3.webp",
            four: "img/zapatillas/nike/AirJordanMidSECraft-4.webp"
        },
        description: "Enciende el estilo con esta versión artesanal del Air Jordan 1 Mid. Su confección inspirada en el revés, que incluye capas únicas y detalles de espuma expuesta, eleva el estilo de esta prenda atemporal de la brand Jordan. Detalles como las costuras decorativas en el Swoosh agregan un atractivo codiciado, al tiempo que el sombreado inesperado, la rica mezcla de materiales y la estética envejecida en la entresuela le dan a este lanzamiento un acabado artesanal.",
        price: 99999
    },
    {
        id: 1,
        brand: "Nike",
        model: "Dunk Low SE",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/nike/NikeDunkLowSE-1.webp",
            two: "img/zapatillas/nike/NikeDunkLowSE-2.webp",
            three: "img/zapatillas/nike/NikeDunkLowSE-3.webp",
            four: "img/zapatillas/nike/NikeDunkLowSE-4.webp"
        },
        description: "Dale un giro a tu look con el estilo de básquetbol retro del Nike Dunk Low. Creado para la cancha, pero llevado a las calles, este ícono del básquetbol de los 80 regresa con cuero brillante y todo el flash que necesitas para brillar. Canalizando un estilo vintage, el cuello acolchado y de perfil bajo te permiten llevar cómodamente tu juego a cualquier lugar.",
        price: 88999
    },
    {
        id: 2,
        brand: "Nike",
        model: "Zion 2",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/nike/Zion2-1.webp",
            two: "img/zapatillas/nike/Zion2-2.webp",
            three: "img/zapatillas/nike/Zion2-3.webp",
            four: "img/zapatillas/nike/Zion2-4.webp"
        },
        description: "Canaliza nuevos niveles de velocidad y potencia con un calzado diseñado para Zion y desarrollado para los jugadores de cualquier nivel. La correa ajustable en la parte four ayuda a mantener el pie firme, al mismo tiempo que la entresuela firme permite jugar a altas velocidades. Además, el Zion 2 tiene más amortiguación Air que su predecesor, por lo que llegarás a las nubes más fácilmente y aterrizarás más suavemente. Haz que esta sea tu elección número 1 para la cancha.",
        price: 88999
    },
    {
        id: 3,
        brand: "Nike",
        model: "React Infinity Run Flyknit 3",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/nike/ReactInfinityRunFlyknit3-1.webp",
            two: "img/zapatillas/nike/ReactInfinityRunFlyknit3-2.webp",
            three: "img/zapatillas/nike/ReactInfinityRunFlyknit3-3.webp",
            four: "img/zapatillas/nike/ReactInfinityRunFlyknit3-4.webp"
        },
        description: "Sigue siendo nuestro calzado más probado y se fabricó para ayudarte a permanecer tras esas elevadas metas de Running. El Nike React Infinity Run 3 se siente cómodo y estable con una pisada suave que te lleva por rutas largas y cortas. La parte four transpirable está diseñada para brindar contención y, a la vez, flexibilidad. Incluso añadimos más amortiguación alrededor del talón y el tobillo para brindar una sensación de soporte. Sigue corriendo: cuentas con nuestro apoyo.",
        price: 90399
    },
    {
        id: 4,
        brand: "Nike",
        model: "Run Swift 3",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/nike/RunSwift3-1.webp",
            two: "img/zapatillas/nike/RunSwift3-2.webp",
            three: "img/zapatillas/nike/RunSwift3-3.webp",
            four: "img/zapatillas/nike/RunSwift3-4.webp"
        },
        description: "Sea cual sea la carrera, el Swift 3 estará ahí con una devoción y un soporte imperecederos. Te ayuda a salir y darlo todo para lograr un triple al final del día o una carrera intensa de tres kilómetros de ida y vuelta con un diseño modificado que ofrece soporte, durabilidad y comodidad por todas partes. Te ayudará a conquistar distancias cortas, sin duda, pero también te acompañará desde el punto A al B mientras te abres paso en el ritmo frenético de la vida cotidiana.",
        price: 49999
    },
    {
        id: 5,
        brand: "Nike",
        model: "Air Winflo 9",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/nike/AirWinflo9-1.webp",
            two: "img/zapatillas/nike/AirWinflo9-2.webp",
            three: "img/zapatillas/nike/AirWinflo9-3.webp",
            four: "img/zapatillas/nike/AirWinflo9-4.webp"
        },
        description: "Lo suficientemente rápido para tus carreras diarias, lo suficientemente ligero para mantenerte en movimiento. Nike Air Winflo 9 tiene un ajuste seguro que mantiene el pie en su lugar mientras pasan los kilómetros. Agregamos mucha espuma en toda la entresuela, dándote más energía a cada paso. Amárrate las agujetas, concéntrate y logra tus objetivos.",
        price: 71999
    },
    {
        id: 6,
        brand: "Nike",
        model: "Infinity React 3 Premium",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/nike/InfinityReact3Premium-1.webp",
            two: "img/zapatillas/nike/InfinityReact3Premium-2.webp",
            three: "img/zapatillas/nike/InfinityReact3Premium-3.webp",
            four: "img/zapatillas/nike/InfinityReact3Premium-4.webp"
        },
        description: "Mantente de pie con una amortiguación suave y con soporte diseñada para ayudarte a seguir sumando kilómetros. Un antepié más ancho y unas pilas de espuma más altas ayudan a amortiguar el desgaste recurrente, dándote la tranquilidad de poder pisar el pavimento todos los días. La elástica capacidad de respuesta también te sorprenderá, agregando un elemento de velocidad pura a uno de nuestros calzados más probados para ayudarte a ir más rápido, más lejos y durante más tiempo que nunca.",
        price: 118999
    },
    {
        id: 7,
        brand: "Nike",
        model: "Zoom Fly 5",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/nike/ZoomFly5-1.webp",
            two: "img/zapatillas/nike/ZoomFly5-2.webp",
            three: "img/zapatillas/nike/ZoomFly5-3.webp",
            four: "img/zapatillas/nike/ZoomFly5-4.webp"
        },
        description: "Acorta la brecha entre tu entrenamiento de fin de semana y el día de la carrera con un diseño duradero que puedes lucir no solo en la línea de salida de tu carrera favorita, sino en los días y los meses posteriores a tu victoria. Ofrece comodidad y confiabilidad, pero con una sensación de propulsión que te ayudará a sentirte rápido y fresco. Ese category de versatilidad es poco común en el campo del running. ¿Quién dijo que no podías tenerlo todo? Más rebote",
        price: 112999
    },
    {
        id: 8,
        brand: "Adidas",
        model: "Gazelle Bold",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/adidas/GazelleBold-1.webp",
            two: "img/zapatillas/adidas/GazelleBold-2.webp",
            three: "img/zapatillas/adidas/GazelleBold-3.webp",
            four: "img/zapatillas/adidas/GazelleBold-4.webp"
        },
        description: "Sentí un poco de nostalgia. Estas zapatillas adidas se han inspirado en un ícono: las Gazelle de 1991. El exterior de gamuza con las icónicas 3 Tiras las hace suaves al tacto y les da un estilo de lujo. Pero aún no hemos terminado. El famoso estilo recibe una actualización audaz con una three de caucho con plataforma que lleva el look a otro nivel.",
        price: 89999
    },
    {
        id: 9,
        brand: "Adidas",
        model: "Lite Racer 3.0",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/adidas/LiteRacer-1.webp",
            two: "img/zapatillas/adidas/LiteRacer-2.webp",
            three: "img/zapatillas/adidas/LiteRacer-3.webp",
            four: "img/zapatillas/adidas/LiteRacer-4.webp"
        },
        description: "Algunos días son interminables. ¿Qué mejor manera de seguir el ritmo que con el diseño inspirado en el running de estas zapatillas adidas? Enfrentate a tu día a día con la amortiguación Cloudfoam suave que le inyecta ligereza a tus pasos y luego salí a cenar con el distintivo estilo de las 3 Tiras.",
        price: 40999
    },
    {
        id: 10,
        brand: "Adidas",
        model: "Fluidflow 2.0",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/adidas/Fluidflow-1.webp",
            two: "img/zapatillas/adidas/Fluidflow-2.webp",
            three: "img/zapatillas/adidas/Fluidflow-3.webp",
            four: "img/zapatillas/adidas/Fluidflow-4.webp"
        },
        description: "No importar si tenés planeado correr hoy o no. La mediasuela ultra suave y transpirable que energiza tus pasos le da a estas zapatillas adidas una ventaja sin importar el ritmo de tus pasos. Tus pies están preparados para lo inesperado.",
        price: 88999
    },
    {
        id: 11,
        brand: "Adidas",
        model: "Lite Racer Adapt 4.0 CloudFoam",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/adidas/LiteRacerAdapt-1.webp",
            two: "img/zapatillas/adidas/LiteRacerAdapt-2.webp",
            three: "img/zapatillas/adidas/LiteRacerAdapt-3.webp",
            four: "img/zapatillas/adidas/LiteRacerAdapt-4.webp"
        },
        description: "Estas zapatillas adidas son la manera más rápida de salir a la calle sin perder el estilo. Con sus inesperadas combinaciones de colores y cordones deportivos, le imprimen energía a atuendos sencillos. La amortiguación Cloudfoam se siente ultraliviana y cómoda, sin importar si las combinás con jeans o con shorts de natación.",
        price: 52999
    },
    {
        id: 12,
        brand: "Adidas",
        model: "Alphaboost V1",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/adidas/Alphaboost-1.webp",
            two: "img/zapatillas/adidas/Alphaboost-2.webp",
            three: "img/zapatillas/adidas/Alphaboost-3.webp",
            four: "img/zapatillas/adidas/Alphaboost-4.webp"
        },
        description: "Llevá tus salidas de running el fin de semana a otro nivel con estas zapatillas adidas Alphaboost. Ponetelas y salí a las calles. La mediasuela Bounce le inyecta suavidad y elasticidad a cada uno de tus pasos. La tecnología BOOST en el talón te devuelve energía en cada paso para que siempre te sientas liviano sin importar a donde te lleve la tarde.",
        price: 78699
    },
    {
        id: 13,
        brand: "Adidas",
        model: "Duramo SL 2.0",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/adidas/Duramo-1.webp",
            two: "img/zapatillas/adidas/Duramo-2.webp",
            three: "img/zapatillas/adidas/Duramo-3.webp",
            four: "img/zapatillas/adidas/Duramo-4.webp"
        },
        description: "Mantené tus pies cómodos y tu estilo impecable en todo momento con estas zapatillas adidas. Usalas con tus shorts de running favoritos para lucir un look deportivo y casual. El exterior de malla ayuda a mantener tus pies frescos, mientras que la amortiguación ultraliviana te ofrece soporte en cada uno de tus pasos.",
        price: 71999
    },
    {
        id: 14,
        brand: "Adidas",
        model: "Supernova 2.0",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/adidas/Supernova-1.webp",
            two: "img/zapatillas/adidas/Supernova-2.webp",
            three: "img/zapatillas/adidas/Supernova-3.webp",
            four: "img/zapatillas/adidas/Supernova-4.webp"
        },
        description: "Este producto se ha fabricado con el fin de reducir la huella de carbono al menos en un 10% con respecto a su versión anterior. Desde la extracción de la materia prima, pasando por la transformación, el empaque y el ciclo de vida del producto, calculamos la huella de carbono de acuerdo con una norma reconocida internacionalmente: ISO 14067.",
        price: 70599
    },
    {
        id: 15,
        brand: "Adidas",
        model: "Running Adizero SL",
        category: "Zapatillas",
        image: {
            one: "img/zapatillas/adidas/RunningAdizero-1.webp",
            two: "img/zapatillas/adidas/RunningAdizero-2.webp",
            three: "img/zapatillas/adidas/RunningAdizero-3.webp",
            four: "img/zapatillas/adidas/RunningAdizero-4.webp"
        },
        description: "Cuando se trata de alcanzar tus metas, cada segundo cuenta. Ya sea para entrenar o para competir, un rendimiento excelente requiere de prendas de alta tecnología optimizadas para la velocidad. Presentamos la nueva colección de zapatillas de running livianas que te ayudan a superar tus límites sin distracciones.",
        price: 87999
    },
    {
        id: 16,
        brand: "Nike",
        model: "Zoom Mercurial Superfly 9 Elite FG",
        category: "Botines",
        image: {
            one: "img/botines/nike/ZoomMercurialSuperfly9EliteFG-1.webp",
            two: "img/botines/nike/ZoomMercurialSuperfly9EliteFG-2.webp",
            three: "img/botines/nike/ZoomMercurialSuperfly9EliteFG-3.webp",
            four: "img/botines/nike/ZoomMercurialSuperfly9EliteFG-4.webp"
        },
        description: "Celebra la competencia más grande de fútbol con un diseño impulsado por la ciencia de la conectividad y la gravedad que inspira el escenario mundial. La placa cromada en fibra de carbono complementa un look futurista increíble hecho para los pies de los mejores jugadores del mundo. Equipado con una unidad Zoom Air, más una textura de agarre en la parte four para brindar un toque excepcional, te ayuda a dominar en los minutos más intensos de un partido, cuando es lo más importante.",
        price: 199999
    },
    {
        id: 17,
        brand: "Nike",
        model: "Gripknit Phantom GX Elite Fusion FG",
        category: "Botines",
        image: {
            one: "img/botines/nike/GripknitPhantomGXEliteFusionFG-1.webp",
            two: "img/botines/nike/GripknitPhantomGXEliteFusionFG-2.webp",
            three: "img/botines/nike/GripknitPhantomGXEliteFusionFG-3.webp",
            four: "img/botines/nike/GripknitPhantomGXEliteFusionFG-4.webp"
        },
        description: "¿Te obsesiona perfeccionar tu arte? Diseñamos el calzado Elite para ti y para las estrellas más grandes del mundo, para así poder brindarte calidad de alto nivel, porque exiges lo mejor de ti mismo y de tu calzado también. Confeccionado con el revolucionario Nike Gripknit, este calzado proporciona un mejor toque de la pelota con un diseño intuitivo que ayuda a mejorar tu precisión tanto al hacer tiros como en un control cercano. En este diseño colorido fusionamos el Flyknit en la parte four para ofrecer transpirabilidad y flexibilidad alrededor del tobillo.",
        price: 168999
    },
    {
        id: 18,
        brand: "Nike",
        model: "Zoom Mercurial Superfly 9 Academy IC",
        category: "Botines",
        image: {
            one: "img/botines/nike/ZoomMercurialSuperfly9AcademyIC-1.webp",
            two: "img/botines/nike/ZoomMercurialSuperfly9AcademyIC-2.webp",
            three: "img/botines/nike/ZoomMercurialSuperfly9AcademyIC-3.webp",
            four: "img/botines/nike/ZoomMercurialSuperfly9AcademyIC-4.webp"
        },
        description: "Juega con el campo a tu favor con el diseño audaz del Superfly 9 Academy IG. Cuenta con una unidad Zoom Air y con una NikeSkin flexible en la parte four para brindar un toque excepcional, de modo que puedas dominar en los últimos y más importantes minutos de un partido. La velocidad está en el Air. Bienvenido a la cancha, Zoom",
        price: 88999
    },
    {
        id: 19,
        brand: "Nike",
        model: "Phantom GX Pro FG",
        category: "Botines",
        image: {
            one: "img/botines/nike/PhantomGXProFG-1.webp",
            two: "img/botines/nike/PhantomGXProFG-2.webp",
            three: "img/botines/nike/PhantomGXProFG-3.webp",
            four: "img/botines/nike/PhantomGXProFG-4.webp"
        },
        description: "¿Te tomas en serio tu deporte? El calzado de fútbol profesional es para quien hace pases milimétricos y logra pasar la pelota a través de la defensa, pero también para quien hace regates impresionantes. Tu juego se trata de precisión, de hacer las jugadas que más importan. Lleva tus habilidades al siguiente nivel con algunas de las innovaciones más grandes de Nike, como una zona de contacto más grande en la parte four. Complementa un diseño que se mueve con tu flujo natural en el campo, para que puedas dominar el juego desde cualquier posición.",
        price: 79999
    },
    {
        id: 20,
        brand: "Nike",
        model: "Phantom GX Academy IC",
        category: "Botines",
        image: {
            one: "img/botines/nike/PhantomGXAcademyIC-1.webp",
            two: "img/botines/nike/PhantomGXAcademyIC-2.webp",
            three: "img/botines/nike/PhantomGXAcademyIC-3.webp",
            four: "img/botines/nike/PhantomGXAcademyIC-4.webp"
        },
        description: "Buscando llevar tu juego al siguiente ¿nivel? Los zapatos Academy te dan el toque de precisión que necesitas para dejar que tus instintos de juego más íntimos deslumbren. Con NikeSkin y una zona táctil de malla para ayudarte a mejorar tu precisión y una placa de agilidad que está diseñada para desviarse y correr contigo, está lista para encender tu espíritu creador de juego espontáneo.",
        price: 62999
    },
    {
        id: 21,
        brand: "Nike",
        model: "Mercurial Superfly 9 Club KM FG/MG",
        category: "Botines",
        image: {
            one: "img/botines/nike/MercurialSuperfly9ClubKMFG-MG-1.webp",
            two: "img/botines/nike/MercurialSuperfly9ClubKMFG-MG-2.webp",
            three: "img/botines/nike/MercurialSuperfly9ClubKMFG-MG-3.webp",
            four: "img/botines/nike/MercurialSuperfly9ClubKMFG-MG-4.webp"
        },
        description: "Juega rápido, sé implacable y siéntete como la superestrella Kylian Mbappé en la cancha con el calzado de fútbol Nike Jr. Diseñados para brindar versatilidad desde el pasto artificial hasta el pasto real, cuentan con la tracción que necesitas para correr y cortar en todo category de campos. El diseño duradero resistirá desde la práctica hasta el día del partido, con el sello de aprobación de uno de los mejores del mundo.",
        price: 41499
    },
    {
        id: 22,
        brand: "Nike",
        model: "Tiempo Legend 9 Academy MG",
        category: "Botines",
        image: {
            one: "img/botines/nike/TiempoLegend9AcademyMG-1.webp",
            two: "img/botines/nike/TiempoLegend9AcademyMG-2.webp",
            three: "img/botines/nike/TiempoLegend9AcademyMG-3.webp",
            four: "img/botines/nike/TiempoLegend9AcademyMG-4.webp"
        },
        description: "El Nike Jr. Tiempo Legend 9 Academy MG, uno de nuestros Tiempo más ligeros hasta la fecha, te permite ir a la ofensiva con un diseño de perfil bajo que se reinventa para los atacantes. La parte four presenta texturas en relieve con suaves almohadillas de espuma que brindan precisión para los regates, pases y tiros, mientras que los tachones en la base aportan tracción para los cortes rápidos y las frenadas repentinas. Rendimiento ligero",
        price: 41499
    },
    {
        id: 23,
        brand: "Nike",
        model: "Zoom Mercurial Superfly 9 Academy TF",
        category: "Botines",
        image: {
            one: "img/botines/nike/ZoomMercurialSuperfly9AcademyTF-1.webp",
            two: "img/botines/nike/ZoomMercurialSuperfly9AcademyTF-2.webp",
            three: "img/botines/nike/ZoomMercurialSuperfly9AcademyTF-3.webp",
            four: "img/botines/nike/ZoomMercurialSuperfly9AcademyTF-4.webp"
        },
        description: "Tienes las habilidades, tienes el partido. Ahora presúmelos con el calzado de fútbol Nike Jr. Las presillas de agarre y las correas dobles se combinan para brindar un diseño fácil de usar que elimina la necesidad de ponerle agujetas y te ayuda a moverte en la cancha rápidamente. Además, el agregar Zoom Air en el talón proporciona más rebote y comodidad en las canchas de pasto sintético (turf), por lo que estás listo para todas las prácticas, entrenamientos y juegos.",
        price: 51499
    },
    {
        id: 24,
        brand: "Adidas",
        model: "Predator Accuracy.3",
        category: "Botines",
        image: {
            one: "img/botines/adidas/PredatorAccuracy-1.webp",
            two: "img/botines/adidas/PredatorAccuracy-2.webp",
            three: "img/botines/adidas/PredatorAccuracy-3.webp",
            four: "img/botines/adidas/PredatorAccuracy-4.webp"
        },
        description: "Control + precisión = confianza. Cuando el arco está en tus ojos, apuntá a la perfección con adidas Predator Accuracy. El suave exterior textil revestido de estos botines incorpora textura de alta definición en la zona de impacto. Una mezcla de elementos y el estampado en relieve te ayudan a lograr cada pase y cada tiro. Su three especializada te permite dominar en la cancha de terreno firme.",
        price: 58999
    },
    {
        id: 25,
        brand: "Adidas",
        model: "X SpeedPortal.3",
        category: "Botines",
        image: {
            one: "img/botines/adidas/XSpeedPortal-1.webp",
            two: "img/botines/adidas/XSpeedPortal-2.webp",
            three: "img/botines/adidas/XSpeedPortal-3.webp",
            four: "img/botines/adidas/XSpeedPortal-4.webp"
        },
        description: "Mente. Cuerpo. botines. Conectados en un abrir y cerrar de ojos. Ponete estos botines adidas X Speedportal para desbloquear la velocidad en todas sus dimensiones. Diseñados para dominar en la cancha de terreno firme, estos botines incorporan un exterior textil revestido ligero y dos tapones de antepié adicionales. La combinación de un cuello tejido plano elástico y un refuerzo de talón rígido en TPU te garantizan sujeción en cada carrera y movimiento two.",
        price: 58999
    },
    {
        id: 26,
        brand: "Adidas",
        model: "Gamemode",
        category: "Botines",
        image: {
            one: "img/botines/adidas/Gamemode-1.webp",
            two: "img/botines/adidas/Gamemode-2.webp",
            three: "img/botines/adidas/Gamemode-3.webp",
            four: "img/botines/adidas/Gamemode-4.webp"
        },
        description: "Dejá que tus pies hablen por vos en la cancha. Demostrá tu amor por el fútbol con adidas Gamemode y su selección de estilos y diseños. Creados con un ajuste cómodo para una amplia gama de formas de pie, estos botines ofrecen un toque amortiguado gracias a su exterior HybridTouch suave. La three versátil te ayudará a mostrar tus habilidades en terreno firme y en pasto sintético. Los estampados llamativos evocan el deporte rey.",
        price: 38999
    },
    {
        id: 27,
        brand: "Adidas",
        model: "Nemeziz 19",
        category: "Botines",
        image: {
            one: "img/botines/adidas/Nemeziz-1.webp",
            two: "img/botines/adidas/Nemeziz-2.webp",
            three: "img/botines/adidas/Nemeziz-3.webp",
            four: "img/botines/adidas/Nemeziz-4.webp"
        },
        description: "Nemeziz 19+ Sg es un nuevo producto para Hombre de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés Nemeziz 19+ Sg podés dejar una reseña abajo; siempre nos encanta conocer tu opinión.",
        price: 119699
    },
    {
        id: 28,
        brand: "Adidas",
        model: "Predator Edge.1 ",
        category: "Botines",
        image: {
            one: "img/botines/adidas/PredatorEdge-1.webp",
            two: "img/botines/adidas/PredatorEdge-2.webp",
            three: "img/botines/adidas/PredatorEdge-3.webp",
            four: "img/botines/adidas/PredatorEdge-4.webp"
        },
        description: "Amague. Potencia. Control. Cuando tenés ventaja, la cancha está llena de posibilidades. Descubrí el deporte rey desde un nuevo ángulo con los adidas Predator. El exterior Zone Skin de estos botines incorpora discretas secciones acanaladas que permiten diferentes categorys de contacto con la pelota. Un Power Facet le agrega peso al antepié para darle más impulso a los ataques. El cuello adaptable adidas PRIMEKNIT sujeta el pie en todo momento.",
        price: 98999
    },
    {
        id: 29,
        brand: "Adidas",
        model: "Copa Sense.3",
        category: "Botines",
        image: {
            one: "img/botines/adidas/CopaSense-1.webp",
            two: "img/botines/adidas/CopaSense-2.webp",
            three: "img/botines/adidas/CopaSense-3.webp",
            four: "img/botines/adidas/CopaSense-4.webp"
        },
        description: "Cuando entrés a la cancha, no solo tenés que concentrarte en el juego. También tenés que sentirlo. Acercate a la pelota con estos botines adidas Copa Sense para terreno firme. Su exterior cómodo y envolvente incluye una lengüeta elástica para facilitar su calce y un antepié de cuero suave para asegurar que la pelota se mantenga bajo tu control. Los tapones moldeados en la three de TPU te permiten moverte con rapidez sobre pasto natural seco. Su diseño se inspira en el escenario más importante del fútbol.",
        price: 43599
    },
    {
        id: 30,
        brand: "Adidas",
        model: "Copa Pure.3",
        category: "Botines",
        image: {
            one: "img/botines/adidas/CopaPure-1.webp",
            two: "img/botines/adidas/CopaPure-2.webp",
            three: "img/botines/adidas/CopaPure-3.webp",
            four: "img/botines/adidas/CopaPure-4.webp"
        },
        description: "Recordá por qué se llama lo llama el deporte rey. Estos botines adidas Copa Pure te ofrecen una comodidad total y un toque perfecto. Fáciles de poner, estos botines incluyen un lujoso antepié de cuero acolchado para ayudarte a mantener la pelota cerca. La three de caucho ranurada se adhiere al pasto sintético para que puedas destacarte en la cancha.",
        price: 58799
    },
    {
        id: 31,
        brand: "Adidas",
        model: "Predator Freak.1",
        category: "Botines",
        image: {
            one: "img/botines/adidas/PredatorFreak-1.webp",
            two: "img/botines/adidas/PredatorFreak-2.webp",
            three: "img/botines/adidas/PredatorFreak-3.webp",
            four: "img/botines/adidas/PredatorFreak-4.webp"
        },
        description: "Cada vez que cruzás esa línea blanca, entrás en un mundo completamente nuevo. Una realidad alterna en la que vos escribís las reglas. La cancha es tuya para controlar. Desatá el demonio que llevas dentro con los adidas Predator. Estos botines tienen un cuello de dos piezas para facilitar su ajuste y un diseño de corte medio para un mayor soporte. El exterior de adidas Primeknit envuelve tu pie, brindando un ajuste seguro. El relieve agresivo Demonskin 2.0 asegura que tengas tanta influencia sobre la pelota como ya tienes sobre tus oponentes.",
        price: 83999
    },
    {
        id: 32,
        brand: "Adidas",
        model: "Conjunto Deportivo 3 Tiras",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/adidas/ConjuntoDeportivo3Tiras-1.webp",
            two: "img/indumentaria/adidas/ConjuntoDeportivo3Tiras-2.webp",
            three: "img/indumentaria/adidas/ConjuntoDeportivo3Tiras-3.webp",
            four: "img/indumentaria/adidas/ConjuntoDeportivo3Tiras-4.webp"
        },
        description: "Con este conjunto adidas tenés opciones de sobra. No solo porque el buzo con capucha y los pantalones se pueden usar juntos o por separado, sino también porque su diseño minimalista se adapta a tu día a día con estilo. Las emblemáticas 3 Tiras destacan en ambas piezas, complementadas con un sutil logo adidas Badge of Sport.",
        price: 72999
    },
    {
        id: 33,
        brand: "Adidas",
        model: "Conjunto Condivo River Plate 22",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/adidas/ConjuntoCondivoRiverPlate22-1.webp",
            two: "img/indumentaria/adidas/ConjuntoCondivoRiverPlate22-2.webp",
            three: "img/indumentaria/adidas/ConjuntoCondivoRiverPlate22-3.webp",
            four: "img/indumentaria/adidas/ConjuntoCondivoRiverPlate22-4.webp"
        },
        description: "El fútbol es mucho más que un deporte, es una pasión. Mostrá tu amor por River Plate con este conjunto adidas. La campera tiene un ajuste ceñido y el pantalón un ajuste clásico para una sensación de total comodidad mientras representás a tu club favorito. La tecnología AEROREADY mantiene tu cuerpo seco desde el primer hasta el último minuto del partido.",
        price: 64799
    },
    {
        id: 34,
        brand: "Adidas",
        model: "Buzo Adicolor Classic",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/adidas/BuzoAdicolorClassic2-1.webp",
            two: "img/indumentaria/adidas/BuzoAdicolorClassic2-2.webp",
            three: "img/indumentaria/adidas/BuzoAdicolorClassic2-3.webp",
            four: "img/indumentaria/adidas/BuzoAdicolorClassic2-4.webp"
        },
        description: "Este buzo adidas luce la estética retro que tanto te gusta. Presenta un diseño inspirado en modelos de nuestros archivos y luce detalles en contraste que rinden homenaje a nuestro legado. Pero su innegable estilo no lo es todo. Su comodidad te hará sentir como nunca.",
        price: 76999
    },
    {
        id: 35,
        brand: "Adidas",
        model: "Pantalon Cargo Blue Version",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/adidas/PantalonCargoBlueVersion-1.webp",
            two: "img/indumentaria/adidas/PantalonCargoBlueVersion-2.webp",
            three: "img/indumentaria/adidas/PantalonCargoBlueVersion-3.webp",
            four: "img/indumentaria/adidas/PantalonCargoBlueVersion-4.webp"
        },
        description: "Este pantalón cargo de adidas fue diseñado para que puedas personalizar el ajuste en los tobillos, lo que significa que podrás adaptarlo a tu estilo personal. La silueta se ha confeccionado en material premium antidesgarre y cuenta con detalles de bolsillos en toda la prenda.",
        price: 137999
    },
    {
        id: 36,
        brand: "Adidas",
        model: "Rompevientos SST",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/adidas/RompevientosSST-1.webp",
            two: "img/indumentaria/adidas/RompevientosSST-2.webp",
            three: "img/indumentaria/adidas/RompevientosSST-3.webp",
            four: "img/indumentaria/adidas/RompevientosSST-4.webp"
        },
        description: "Este rompevientos adidas SST irradia el icónico estilo de las pistas de atletismo. Las 3 Tiras en las mangas contrastantes le dan a este rompevientos un look clásico. La cintura con cordón de ajuste asegura un ajuste perfecto, y el bolsillo canguro mantiene tus objetos personales a la mano. Su tejido antidesgarre es perfecto para lucir tu estilo deportivo en todo momento.",
        price: 64799
    },
    {
        id: 37,
        brand: "Adidas",
        model: "Camiseta Fortore 23",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/adidas/CamisetaFortore23-1.webp",
            two: "img/indumentaria/adidas/CamisetaFortore23-2.webp",
            three: "img/indumentaria/adidas/CamisetaFortore23-3.webp",
            four: "img/indumentaria/adidas/CamisetaFortore23-4.webp"
        },
        description: "Encontrá tu look futbolero con esta camiseta Fortore 23. Creada para que tu equipo se destaque en la cancha, esta llamativa camiseta luce un diseño inspirado en el estilo adidas Equipment de los 90. Incorpora tecnología de absorción AEROREADY que te mantiene seco y está hecho de tejido entrelazado suave y liviano que se encarga de mantenerte concentrado en el partido.",
        price: 25999
    },
    {
        id: 38,
        brand: "Adidas",
        model: "Camiseta Prepartido Alemania",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/adidas/CamisetaPrepartidoAlemania-1.webp",
            two: "img/indumentaria/adidas/CamisetaPrepartidoAlemania-2.webp",
            three: "img/indumentaria/adidas/CamisetaPrepartidoAlemania-3.webp",
            four: "img/indumentaria/adidas/CamisetaPrepartidoAlemania-4.webp"
        },
        description: "Ayudándoles a concentrarse en el calentamiento. Esta camiseta de fútbol adidas es la que usan los jugadores de la Selección de Alemania mientras se preparan para sus encuentros. Su tejido suave con tecnología de absorción AEROREADY se encarga de que su piel se sienta fresca y seca en todo momento. Luce un diseño llamativo en dorado tomado de la camiseta visitante y el escudo de la selección de cuatro estrellas que demuestra tu orgullo por el equipo.",
        price: 33499
    },
    {
        id: 39,
        brand: "Adidas",
        model: "Buzo Con Capucha Argentina",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/adidas/BuzoConCapuchaArgentina-1.webp",
            two: "img/indumentaria/adidas/BuzoConCapuchaArgentina-2.webp",
            three: "img/indumentaria/adidas/BuzoConCapuchaArgentina-3.webp",
            four: "img/indumentaria/adidas/BuzoConCapuchaArgentina-4.webp"
        },
        description: "Cuando el premio mayor esta en el horizonte, la concentración lo es todo. Este buzo con capucha de fútbol adidas mantiene cómodos a los jugadores de la Selección Argentina mientras descansan en el campo de entrenamiento. La tecnología de absorción AEROREADY, el tejido de felpa francesa suave y la capucha con forro interno hacen más fácil desconectarte del mundo exterior en los momentos fuera de la cancha, permitiéndote regresar renovado.",
        price: 47399
    },
    {
        id: 40,
        brand: "Nike",
        model: "Buzo San Lorenzo 2023 Edition",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/nike/BuzoSanLorenzo2023Edition-1.webp",
            two: "img/indumentaria/nike/BuzoSanLorenzo2023Edition-2.webp",
            three: "img/indumentaria/nike/BuzoSanLorenzo2023Edition-3.webp",
            four: "img/indumentaria/nike/BuzoSanLorenzo2023Edition-4.webp"
        },
        description: "Llevá la pasión con vos a todos lados con el buzo de San Lorenzo 2023 Edition. Capucha con cordón de ajuste. Bolsillos de canguro que brindan estilo y practicidad.",
        price: 39499
    },
    {
        id: 41,
        brand: "Nike",
        model: "Sportswear HD",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/nike/SportswearHD-1.webp",
            two: "img/indumentaria/nike/SportswearHD-2.webp",
            three: "img/indumentaria/nike/SportswearHD-3.webp",
            four: "img/indumentaria/nike/SportswearHD-4.webp"
        },
        description: "Mantente protegido en la ciudad, en la cancha o donde sea que estes. El corte holgado se combina con el tejido suave e impermeable y un forro interior de malla para ofrecer una sensacion ligera y comoda en tu cuerpo.",
        price: 55599
    },
    {
        id: 42,
        brand: "Nike",
        model: "Buzo Solo Swoosh",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/nike/BuzoSoloSwoosh-1.webp",
            two: "img/indumentaria/nike/BuzoSoloSwoosh-2.webp",
            three: "img/indumentaria/nike/BuzoSoloSwoosh-3.webp",
            four: "img/indumentaria/nike/BuzoSoloSwoosh-4.webp"
        },
        description: "La sudadera con gorro de cierre completo Solo Swoosh, un verdadero clásico, está confeccionada con tejido fleece super suave para brindar comodidad tersa y relajada. La simplicidad del diseño te permite combinarla con cualquier cosa para un uso diario impecable e informal.",
        price: 61599
    },
    {
        id: 43,
        brand: "Nike",
        model: "Campera Jordan Flight MVP",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/nike/CamperaJordanFlightMVP-1.webp",
            two: "img/indumentaria/nike/CamperaJordanFlightMVP-2.webp",
            three: "img/indumentaria/nike/CamperaJordanFlightMVP-3.webp",
            four: "img/indumentaria/nike/CamperaJordanFlightMVP-4.webp"
        },
        description: "Dile al mundo que tenga cuidado porque ya estás aquí. Esta chamarra audaz y ligera te cubre, ya sea que estés practicando tiros informales con amigos o sentado a un lado de la cancha durante el partido. Las vibras retro aportan el calor, desde el diseño con cierre de un cuarto hasta los grandes gráficos serigrafiados que recuerdan a tu ícono favorito.",
        price: 54799
    },
    {
        id: 44,
        brand: "Nike",
        model: "Campera Paris Saint-Germain",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/nike/CamperaParisSaint-Germain-1.webp",
            two: "img/indumentaria/nike/CamperaParisSaint-Germain-2.webp",
            three: "img/indumentaria/nike/CamperaParisSaint-Germain-3.webp",
            four: "img/indumentaria/nike/CamperaParisSaint-Germain-4.webp"
        },
        description: "Renueva tu fondo de armario esta temporada con una campera ligera que rinde homenaje a Jordan y al París Saint-Germain. Confeccionada con un tejido Woven suave para ofrecer un estilo impecable, esta campera cuenta con bolsillos a presión para tus cosas, gráficos serigrafiados y un montón de características regulables para conseguir un look perfecto.",
        price: 67599
    },
    {
        id: 45,
        brand: "Nike",
        model: "Dri-FIT Phenom Elite",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/nike/Dri-FITPhenomElite-1.webp",
            two: "img/indumentaria/nike/Dri-FITPhenomElite-2.webp",
            three: "img/indumentaria/nike/Dri-FITPhenomElite-3.webp",
            four: "img/indumentaria/nike/Dri-FITPhenomElite-4.webp"
        },
        description: "Dejá que senderos polvorientos y terrenos rocosos sean su guía. Con los pantalones Nike Dri-FIT Phenom Elite, estás preparado para lo inesperado con una sensación suave que repele el viento y el agua. Agregamos múltiples bolsillos para que nunca esté lejos sin un refrigerio o su teléfono. Completa el look con la campera Nike GORE-TEX para una cobertura hecha para las aventuras todoterreno más desafiantes. Este producto está fabricado con al menos un 75 % de fibras de poliéster recicladas.",
        price: 50699
    },
    {
        id: 46,
        brand: "Nike",
        model: "Trail Dawn Range",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/nike/TrailDawnRange-1.webp",
            two: "img/indumentaria/nike/TrailDawnRange-2.webp",
            three: "img/indumentaria/nike/TrailDawnRange-3.webp",
            four: "img/indumentaria/nike/TrailDawnRange-4.webp"
        },
        description: "Usamos las perspectivas de los corredores de senderos como tú para crear estos joggins elásticos y ligeros que te permiten aprovechar al máximo tu movimiento. Tienen un diseño entallado con un ajuste relajado que se siente tan bien en los caminos alternativos como en el descanso para comer después de la carrera.",
        price: 67599
    },
    {
        id: 47,
        brand: "Nike",
        model: "Jordan Flight MVP",
        category: "Indumentaria",
        image: {
            one: "img/indumentaria/nike/JordanFlightMVP-1.webp",
            two: "img/indumentaria/nike/JordanFlightMVP-2.webp",
            three: "img/indumentaria/nike/JordanFlightMVP-3.webp",
            four: "img/indumentaria/nike/JordanFlightMVP-4.webp"
        },
        description: "Llegaro tus joggers de temporada. Están confeccionados con tejido Fleece ligero, para brindar comodidad y calidez sin ser demasiado abrigadores. El trío de gráficos serigrafiados a lo largo de la pierna mantiene tu look impecable.",
        price: 47199
    }
]
