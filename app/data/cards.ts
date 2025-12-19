const cardsData = {
  calentando: {
   "???": [
      { title: " ??? ", description: "¿Cuál es el nombre del dragón que guarda el tesoro de Erebor?\n\nSi aciertas, bebe el otro 3 tragos, si no los bebes tú" },
      { title: " ??? ", description: "¿Cómo se llama el reino de los elfos?\n\nSi aciertas, bebe el otro 1 trago, si no lo bebes tú" },
      { title: " ??? ", description: "¿Cómo se llama el mago que acompaña a Bilbo y los enanos?\n\nSi aciertas, bebe el otro 1 trago, si no lo bebes tú" },
      { title: " ??? ", description: "¿Cuál es el nombre del líder de los enanos?\n\nSSi aciertas, bebe el otro 1 trago, si no lo bebes tú" },
      { title: " ??? ", description: "¿Qué criatura envenena a Frodo cerca de Cirith Ungol?\n\nSi aciertas, bebe el otro 2 tragos, si no los bebes tú" },
      { title: " ??? ", description: "¿Quién es el rey de Rohan?\n\nSi aciertas, bebe el otro 1 trago, si no lo bebes tú" },
      { title: " ??? ", description: "¿Cuál es el número total de miembros en la Comunidad del Anillo?\n\nSi aciertas, bebe el otro 1 trago, si no lo bebes tú" },
      { title: " ??? ", description: "¿Qué personaje dice: “¡No soy un hombre!” antes de matar al Rey Brujo?\n\nSi fallas prenda fuera" },
      { title: " ??? ", description: "¿Quién es el hermano de Boromir?\n\nBebes 1 si fallas" },
      { title: " ??? ", description: "¿Qué trabajo tiene Chandler Bing?\n\nSi aciertas, bebe el otro 2 tragos, si no los bebes tú" },
      { title: " ??? ", description: "¿Cómo se llama la hermana gemela de Phoebe?\n\nBebes hidalgo si fallas" },
      { title: " ??? ", description: "¿Qué mascotas tienen Joey y Chandler?\n\n2 tragos si fallas" },
      { title: " ??? ", description: "¿Cómo se llama el personaje interpretado por Leonardo DiCaprio?\n\nSi aciertas, bebe el otro 2 tragos, si no los bebes tú" },
      { title: " ??? ", description: "¿Cómo se llama el café donde se reúnen siempre?\n\nHidalgo si fallas" },
      { title: " ??? ", description: "¿Qué relación tiene Cooper con Murph?\n\nBebes si fallas" },
      { title: " ??? ", description: "¿Cuántas veces se han casado los 5 amigos en total?\n\nPrenda fuera si fallas" },
      { title: " ??? ", description: "¿Qué animal aparece en el logo de la empresa de Jordan?\n\nBebes 3 si fallas" },
      { title: " ??? ", description: "¿Qué regalo le da Galadriel (elfa) a Frodo?\n\nSi aciertas, mandas que prenda se le va fuera" },
      { title: " ??? ", description: "¿Qué encuentra Bilbo en las cuevas de Gollum?\n\nBebes 4 si fallas, si no bebe 1 el otro" },
      { title: " ??? ", description: "¿Qué animal gigante lleva a los protagonistas a salvo al final del Hobbit?\n\nSi aciertas, bebe el otro 2 tragos, si no bebes tú el doble" },
      { title: " ??? ", description: "¿Qué objeto robó el dragón Smaug de los enanos que representa su poder real?\n\nSi aciertas, bebe el otro 2 tragos, si no los bebes tú" },
      { title: " ??? ", description: "¿Quién se pone un pavo en la cabeza para hacer reír a Chandler?\n\nSi fallas 2 tragos, si aciertas el otro beb el doble" },
      { title: " ??? ", description: "¿Dónde se besan por primera vez Ross y Rachel?\n\nSi aciertas, mandas prenda fuera, si no bebes lo que te mande" },
      { title: " ??? ", description: "¿Qué profesión tiene Richard?\n\nSi aciertas mandas 1 trago" },
      { title: " ??? ", description: "¿Cómo se llama la canción más famosa de Phoebe?\n\nHidalso si fallas, mandas 2 si aciertas" },
      { title: " ??? ", description: "¿Cómo se llama al que deja plantado Rachel en el altar?\n\nBebemos los dos si fallas" },
      { title: " ??? ", description: "¿Quién es 'Marcel'?\n\nSi aciertas, bebe el otro 2 tragos, si no los bebes tú" },
      { title: " ??? ", description: "¿Cómo se llama el novio de Mónica que era millonario y quería ser luchador?\n\nMandas prenda fuera si aciertas, si no te la quitas tú" },
      { title: " ??? ", description: "¿Algo ridículo que haya hecho Ross en una cita?\n\nPero bebemos los dos" },
      { title: " Libre ", description: "Puedes hacer la pregunta que quieras, sobre lo que quieras. Apostaros un número. Si falla bebe el número de tragos, si acuerta bebes tú el doble" },
      { title: " Libre ", description: "Te hará la pregunta que quiera, si aciertas bebe 3, si no los bebes tú " },
      { title: " Libre ", description: "Te hará la pregunta que quiera, si la adivinas le podras quitar la prenda que quieras, si la fallas te quitaras la que el otro te mande" }
],


    "Beber": [
      { title: "Brindis", description: "Brindamos por ..." },
      { title: "Probabilidad", description: "Del 1 al 5 \n\nsi se lo adivinas se bebe ese número de tragos " },
      { title: "Probabilidad", description: "Del 1 al 2 \n\nsi te lo adivina chupito " },
      { title: "Traguito", description: "Nos cambiamos el baso y bebemos" },
      { title: "Traguito", description: "Nos cambiamos el baso y bebemos" }

    ],

    "Especiales": [
      { title: "Casar - matar - follar", description: "3 nombres elegidos por el otro para Casar, Matar o Follar " },
      { title: "Adivina", description: "Te dibujará/pondrá algo en la espalda con los dedos y lo tienes que adivinar, si no bebes" },
      {title: "Prenda", description: "Si llevas más de 3 prendas, quítate, si no quítale" },
      { title: "Casar - matar - follar", description: "3 nombres elegidos por el otro para Casar, Matar o Follar " },
      { title: "Adivina", description: "Te dibujará/pondrá algo en la espalda con los dedos y lo tienes que adivinar, si no bebes" },
      {title: "Prenda", description: "Si llevas más de 3 prendas, quítate, si no quítale" }  
    ]
  },

  calentitos: {
    "???": [
      { title: " Libre ", description: "Puedes hacer la pregunta que quieras, sobre lo que quieras. Apostaros un número. Si falla bebe el número de tragos, si acuerta bebes tú el doble" },
      { title: " Libre ", description: "Te hará la pregunta que quiera, si aciertas bebe 3, si no los bebes tú " },
      { title: " Libre ", description: "Te hará la pregunta que quiera, si la adivinas le podras quitar la prenda que quieras, si la fallas te quitaras la que el otro te mande" },
      { title: " ??? ", description: "¿Qué personaje dice: “¡No soy un hombre!” antes de matar al Rey Brujo?\n\nSi fallas prenda fuera" },
      { title: " ??? ", description: "¿Quién es el hermano de Boromir?\n\nBebes 1 si fallas" },
      { title: " ??? ", description: "¿Qué trabajo tiene Chandler Bing?\n\nSi aciertas, bebe el otro 2 tragos, si no los bebes tú" },
      { title: " ??? ", description: "¿Para qué marca trabaja Rachel?\n\nSi aciertas, bebe el otro 1 trago, si no lo bebes tú" },
      { title: " ??? ", description: "¿Por qué se enfada Ross y tiene que dejar de trabajar?\n\nSi aciertas, bebe el otro 2 tragos, si no los bebes tú" },
      { title: " ??? ", description: "¿En qué serie se hace famoso Joey?\n\nSi fallas, bebemos los dos" }
    ],

    "Beber": [
      { title: "Brindis", description: "Brindamos por ..." },
      { title: "Probabilidad", description: "Del 1 al 5 \n\nsi se lo adivinas se bebe ese número de tragos " },
      { title: "Probabilidad", description: "Del 1 al 2 \n\nsi te lo adivina chupito " },
      { title: "Traguito", description: "Nos cambiamos el baso y bebemos" },
      { title: "Traguito", description: "Trago de boca a boca" }
    ],

    "Especiales": [
      { title: "Besito", description: "Bésale donde quieras, tiene que cerrar los ojos" },
      { title: "Besito", description: "Beso de 10 segundos" },
      { title: "Masaje", description: "Le haces 10 segundos de masaje ... especial" },
      { title: "Norma", description: "Pon una regla (para el otro o para los dos)" },
      { title: "Casar - matar - follar", description: "3 nombres elegidos por el otro para Casar, Matar o Follar " },
      { title: "Masaje", description: "Te tiene que hacer un masaje de un minuto, tumbados" },
      { title: "Prenda", description: "Ponte de rodillas, desabrochale y abrochale el pantalon, si aun le queda; si no bebéis 2" },
      { title: "Masaje Rol", description: "Empieza por donde el cliente quiera y termina como quieras, 45 segundos" },
      { title: "Cierra los ojos", description: "Te va a chupar por donde quiera" },
      { title: "Besito", description: "Dale un beso en el cuello" },
      { title: "Cierra los ojos", description: "Te va a decir algo al oído" },
      { title: "Masaje", description: "Tápale los ojos y hazle un masaje de 20 segundos" },
      { title: "Toqueteo", description: "Tócale ... por 5 segundos" },
      { title: "Confess", description: "Dile lo que quieras hacerle al oído" },
      {title: "Prenda", description: "Quítale lo que quieras, no puedes usar las manos" },

    ]
  },
};

export default cardsData;
