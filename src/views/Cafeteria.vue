<template>
  <q-page class="fondo">

    <div class="contenedor">

      <q-card class="card">

        <q-img
          src="../img/Cafeteria2.png"
          class="banner"
          fit="cover"
        >
          <div class="banner-titulo">
            <h1>Cafetería</h1>
            <p>Un espacio para alimentarse, descansar y compartir.</p>
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
                Es un espacio destinado a brindar diferentes opciones de
                alimentos y bebidas a los aprendices, instructores, funcionarios
                y visitantes del centro.<br><br>

                Es un lugar donde la comunidad educativa puede disfrutar de un
                momento de descanso durante las jornadas de formación y
                actividades laborales.<br><br>

                Además de ofrecer productos para el consumo diario, la cafetería
                funciona como un punto de encuentro para compartir con los
                compañeros y fortalecer la convivencia dentro del centro.<br><br>

                Cuenta con un ambiente agradable para que los aprendices puedan
                alimentarse, descansar y recargar energías antes de continuar
                con sus actividades.
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
                  <q-item-section side class="horario-hora">7:00 a. m. - 12:00 p. m. / 1:00 p. m. - 9:00 p. m.</q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Martes</q-item-section>
                  <q-item-section side class="horario-hora">7:00 a. m. - 12:00 p. m. / 1:00 p. m. - 9:00 p. m.</q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Miércoles</q-item-section>
                  <q-item-section side class="horario-hora">7:00 a. m. - 12:00 p. m. / 1:00 p. m. - 9:00 p. m.</q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Jueves</q-item-section>
                  <q-item-section side class="horario-hora">7:00 a. m. - 12:00 p. m. / 1:00 p. m. - 9:00 p. m.</q-item-section>
                </q-item>

                <q-item class="horario-item">
                  <q-item-section class="horario-dia">Viernes</q-item-section>
                  <q-item-section side class="horario-hora">7:00 a. m. - 12:00 p. m. / 1:00 p. m. - 9:00 p. m.</q-item-section>
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
                  +57 322 303 84 51
                </div>
              </div>

            </div>

          </div>

          <div class="tarjeta-encargado">

            <q-avatar >
              <img src="../img/cafeteria.jpeg">
            </q-avatar>

            <div class="nombre-encargado">
              Laura Carreño
            </div>

            <div class="cargo-encargado">
              Coordinadora de Cafetería
            </div>

            <div class="dato-encargado">
              <q-icon name="🙌" />
              Servicio de cafetería
            </div>

            <div class="dato-encargado">
              <q-icon name="📨" />
              lcarreno@sena.edu.com
            </div>

            <div class="mensaje-encargado">
              “Un espacio para compartir, alimentarse y recargar energías.”
            </div>

          </div>

        </div>

      </q-card>

    </div>

  </q-page>
</template>