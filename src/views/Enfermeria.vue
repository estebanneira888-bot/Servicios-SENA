```vue
<template>
  <q-page class="enfermeria-fondo q-pa-md">

    <div class="enfermeria-contenedor">

      <!-- FOTO DE ENFERMERÍA -->
      <q-card class="enfermeria-card">

        <q-img
          src="../img/Enfermeria2.png"
          class="enfermeria-banner"
          fit="cover"
        >
          <div class="absolute-bottom text-h4 text-weight-bold">
            Enfermería
          </div>
        </q-img>

        <!-- DESCRIPCIÓN -->
        <q-card-section>
          <div class="text-h5 text-weight-bold text-primary q-mb-md">
            Enfermería
          </div>

          <p class="texto-descripcion">
            El servicio de enfermería del SENA brinda atención y orientación
            básica en salud a los aprendices, instructores y demás integrantes
            de la comunidad educativa.
          </p>

          <p class="texto-descripcion">
            Este espacio está destinado a prestar primeros auxilios, realizar
            acompañamiento en situaciones que requieran atención inmediata y
            promover hábitos de vida saludable.
          </p>

          <p class="texto-descripcion">
            También ofrece orientación sobre el cuidado de la salud y,
            cuando es necesario, facilita la remisión a los servicios de salud
            correspondientes.
          </p>
        </q-card-section>

        <q-separator />

        <!-- HORARIOS -->
        <q-card-section>
          <div class="text-h6 text-weight-bold text-primary q-mb-md">
            <q-icon name="schedule" class="q-mr-sm" />
            Horarios de atención
          </div>

          <q-list bordered separator class="rounded-borders">

            <q-item>
              <q-item-section>
                <q-item-label>Lunes</q-item-label>
              </q-item-section>

              <q-item-section side>
                7:00 a. m. - 6:00 p. m.
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label>Martes</q-item-label>
              </q-item-section>

              <q-item-section side>
                7:00 a. m. - 6:00 p. m.
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label>Miércoles</q-item-label>
              </q-item-section>

              <q-item-section side>
                7:00 a. m. - 6:00 p. m.
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label>Jueves</q-item-label>
              </q-item-section>

              <q-item-section side>
                7:00 a. m. - 6:00 p. m.
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label>Viernes</q-item-label>
              </q-item-section>

              <q-item-section side>
                7:00 a. m. - 5:00 p. m.
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label>Sábado</q-item-label>
              </q-item-section>

              <q-item-section side>
                8:00 a. m. - 12:00 p. m.
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label>Domingo</q-item-label>
              </q-item-section>

              <q-item-section side>
                Cerrado
              </q-item-section>
            </q-item>

          </q-list>
        </q-card-section>

        <q-separator />

        <!-- CONTACTO -->
        <q-card-section>

          <div class="text-h6 text-weight-bold text-primary q-mb-md">
            <q-icon name="phone" class="q-mr-sm" />
            Contacto
          </div>

          <div class="contacto-item">
            <q-icon name="phone" size="28px" color="primary" />

            <span>
              +57 321 415 39 95
            </span>
          </div>

        </q-card-section>

        <q-separator />

       
        <q-card-section>

          <div class="text-h6 text-weight-bold text-primary q-mb-lg">
            <q-icon name="⛑️" class="q-mr-sm" />
            Encargado de atención al cliente
          </div>

          <div class="encargado">

            <q-avatar size="110px" color="primary" text-color="white">
              <img src="../img/enfermeria.jpeg" size="60px" />
            </q-avatar>

            <div class="encargado-info">

              <div class="text-h6 text-weight-bold">
                Enfermera encargada
              </div>

              <div class="text-subtitle1">
                Profesional de Enfermería
              </div>

              <div class="text-body1 q-mt-sm">
                <class="q-mr-sm" color="primary" />
                enfermeria@sena.edu.co
              </div>

            </div>

          </div>

        </q-card-section>

      </q-card>

    </div>

  </q-page>
</template>



