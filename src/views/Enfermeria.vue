<template>
  <q-page class="fondo">

    <div class="contenedor">

      <q-card class="card">

        <q-img
          src="../img/Enfermeria2.png"
          class="banner"
          fit="cover"
        >
          <div class="banner-titulo">
            <h1>Enfermería</h1>
            <p>Cuidado, prevención y bienestar para toda la comunidad SENA.</p>
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
                El servicio de enfermería del SENA brinda atención y orientación
                básica en salud a los aprendices, instructores y demás integrantes
                de la comunidad educativa.<br><br>

                Este espacio está destinado a prestar primeros auxilios, realizar
                acompañamiento en situaciones que requieran atención inmediata y
                promover hábitos de vida saludable.<br><br>

                También ofrece orientación sobre el cuidado de la salud y,
                cuando es necesario, facilita la remisión a los servicios de salud
                correspondientes.
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
                  <q-item-section side class="horario-hora">
                    6:30 a. m. - 10:30 a. m. / 4:00 p. m. - 8:00 p. m.
                  </q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Martes</q-item-section>
                  <q-item-section side class="horario-hora">
                    6:30 a. m. - 10:30 a. m. / 4:00 p. m. - 8:00 p. m.
                  </q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Miércoles</q-item-section>
                  <q-item-section side class="horario-hora">
                    6:30 a. m. - 10:30 a. m. / 4:00 p. m. - 8:00 p. m.
                  </q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Jueves</q-item-section>
                  <q-item-section side class="horario-hora">
                    6:30 a. m. - 10:30 a. m. / 4:00 p. m. - 8:00 p. m.
                  </q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Viernes</q-item-section>
                  <q-item-section side class="horario-hora">
                    6:30 a. m. - 10:30 a. m. / 4:00 p. m. - 8:00 p. m.
                  </q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Sábado</q-item-section>
                  <q-item-section side class="horario-hora">
                    Sin servicio
                  </q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Domingo</q-item-section>
                  <q-item-section side class="horario-hora">
                    Sin servicio
                  </q-item-section>
                </q-item>

              </q-list>

            </div>

            <div class="seccion">

              <div class="contacto-box">

                <div class="contacto-icono">
                  <q-icon name="📱" />
                </div>

                <div>
                  <div class="contacto-titulo">
                    CONTACTO
                  </div>

                  <div class="contacto-numero">
                    +57 321 415 39 95
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div class="tarjeta-encargado">

            <q-avatar>
              <img src="../img/enfermeria.jpeg">
            </q-avatar>

            <div class="nombre-encargado">
              Enfermera encargada
            </div>

            <div class="cargo-encargado">
              Profesional de Enfermería
            </div>

            <div class="dato-encargado">
              <q-icon name="🙌" />
              Atención en salud
            </div>

            <div class="dato-encargado">
              <q-icon name="📩" />
              enfermeria@sena.edu.co
            </div>

            <div class="mensaje-encargado">
              “Tu salud también hace parte de tu formación.”
            </div>

          </div>

        </div>

        <div class="beneficios">

          <div class="beneficio">
            <div class="beneficio-icono">
              <q-icon name="🗣️" />
            </div>
            <div class="beneficio-titulo">Atención oportuna</div>
            <div class="beneficio-texto">
              Primeros auxilios y orientación en salud.
            </div>
          </div>

          <div class="beneficio">
            <div class="beneficio-icono">
              <q-icon name="⚠️" />
            </div>
            <div class="beneficio-titulo">Prevención</div>
            <div class="beneficio-texto">
              Promoción de hábitos saludables.
            </div>
          </div>

          <div class="beneficio">
            <div class="beneficio-icono">
              <q-icon name="🫂" />
            </div>
            <div class="beneficio-titulo">Comunidad educativa</div>
            <div class="beneficio-texto">
              Atención para aprendices y funcionarios.
            </div>
          </div>

          <div class="beneficio">
            <div class="beneficio-icono">
              <q-icon name="❤️‍🩹" />
            </div>
            <div class="beneficio-titulo">Tu bienestar</div>
            <div class="beneficio-texto">
              Cuidar de ti es nuestra prioridad.
            </div>
          </div>

        </div>

      </q-card>

    </div>

  </q-page>
</template>