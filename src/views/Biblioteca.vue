<template>
  <q-page class="fondo">

    <div class="contenedor">

      <q-card class="card">

        <q-img
          src="../img/biblioteca2.png"
          class="banner"
          fit="cover"
        >
          <div class="banner-titulo">
            <h1>Biblioteca</h1>
            <p>Un espacio para aprender, consultar e investigar.</p>
          </div>
        </q-img>

        <div class="contenido-principal">

          <div class="columna-izquierda">

            <div class="seccion">

              <div class="titulo-seccion">
                <div class="icono-titulo">
                  <q-icon name="❓" />
                </div>
                ¿Qué es el servicio?
              </div>

              <p class="texto-descripcion">
                La biblioteca del SENA Centro Agroturístico es un espacio de
                aprendizaje, consulta y apoyo para los procesos de formación
                profesional integral de los aprendices y funcionarios.<br><br>

                Cuenta con recursos físicos y digitales que permiten consultar
                información técnica, científica y humanística relacionada con
                los diferentes programas de formación.<br><br>

                También ofrece un ambiente adecuado para la lectura, investigación,
                trabajo académico y desarrollo de actividades colaborativas.<br><br>

                Ofrece consultas en sala, préstamos a domicilio, préstamo
                interbibliotecario, talleres de lectura, capacitaciones, acceso
                a TIC y asesorías en búsqueda de información.
              </p>

            </div>

            <div class="seccion">

              <div class="titulo-seccion">
                <div class="icono-titulo">
                  <q-icon name="⏳" />
                </div>
                Horarios de atención
              </div>

              <q-list class="horarios">

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Lunes</q-item-section>
                  <q-item-section side class="horario-hora">7:00 a. m. - 10:00 p. m.</q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Martes</q-item-section>
                  <q-item-section side class="horario-hora">7:00 a. m. - 10:00 p. m.</q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Miércoles</q-item-section>
                  <q-item-section side class="horario-hora">7:00 a. m. - 10:00 p. m.</q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Jueves</q-item-section>
                  <q-item-section side class="horario-hora">7:00 a. m. - 10:00 p. m.</q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Viernes</q-item-section>
                  <q-item-section side class="horario-hora">7:00 a. m. - 10:00 p. m.</q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Sábado</q-item-section>
                  <q-item-section side class="horario-hora">Sin servicio</q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Domingo</q-item-section>
                  <q-item-section side class="horario-hora">Sin servicio</q-item-section>
                </q-item>

              </q-list>

            </div>

            <div class="contacto-box">

              <div class="contacto-icono">
                <q-icon name="📱" />
              </div>

              <div>
                <div class="contacto-titulo">CONTACTO</div>
                <div class="contacto-numero">
                  +57 312 584 80 32
                </div>
              </div>

            </div>

          </div>

          <div class="tarjeta-encargado">

            <q-avatar>
              <img src="../img/bibliotecaria.jpeg">
            </q-avatar>

            <div class="nombre-encargado">
              Yudith Milagros Martínez Bautista
            </div>

            <div class="cargo-encargado">
              Encargada de Biblioteca
            </div>

            <div class="dato-encargado">
              <q-icon name="🙌" />
              Servicio de Biblioteca
            </div>

            <div class="dato-encargado">
              <q-icon name="📩" />
              ymmartinez@sena.edu.co
            </div>

            <div class="mensaje-encargado">
              “Un buen libro puede convertirse en una nueva oportunidad para aprender.”
            </div>

          </div>

        </div>

      </q-card>

    </div>

  </q-page>
</template>