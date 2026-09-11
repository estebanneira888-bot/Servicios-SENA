<template>
  <q-page class="fondo q-pa-md">

    <div class="contenedor">

      <q-card class="card">

        <q-img
          src="../img/SENA.jpeg"
          class="banner"
          fit="cover"
        >
          <div class="absolute-bottom text-h4 text-weight-bold">
            Centro Agroturístico SENA
          </div>
        </q-img>


        <q-card-section>

          <div class="text-h5 text-weight-bold q-mb-md">
            <div class="titulos">Centro Agroturístico</div>
          </div>

          <p class="texto-descripcion">
            El Centro Agroturístico del SENA está ubicado en San Gil,
            Santander, y hace parte de la oferta de centros de formación
            del Servicio Nacional de Aprendizaje. Su objetivo principal
            es contribuir a la formación profesional integral de los
            aprendices y al desarrollo de la región.<br>
            El centro cuenta con diferentes espacios y servicios que
            apoyan el proceso de formación, entre ellos biblioteca,
            enfermería, bienestar, cafetería y coordinación. Estos
            espacios permiten brindar atención y acompañamiento a los
            aprendices durante su etapa de formación.<br>
            A través de sus programas de formación, el SENA busca
            fortalecer las competencias de sus aprendices y prepararlos
            para enfrentar las necesidades del sector productivo.
            También promueve el desarrollo de habilidades personales,
            sociales y laborales.<br>
            El Centro Agroturístico representa un espacio de aprendizaje,
            convivencia y crecimiento personal, donde aprendices,
            instructores y funcionarios trabajan en conjunto para
            contribuir al desarrollo social y económico de la región.
          </p>

        </q-card-section>


        <q-separator />

        <q-card-section>

          <div class="text-h5 text-weight-bold q-mb-md">
            <div class="titulos">Servicios del Centro</div>
          </div>

          <q-list bordered separator class="rounded-borders">

            <q-item>
              <q-item-section avatar>
                <q-icon name="⛑️" size="30px" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Enfermería</q-item-label>
                <q-item-label caption>
                  Atención y orientación básica en salud.
                </q-item-label>
              </q-item-section>
            </q-item>


            <q-item>
              <q-item-section avatar>
                <q-icon name="❤️‍🩹" size="30px" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Bienestar</q-item-label>
                <q-item-label caption>
                  Actividades y acompañamiento para el bienestar
                  de los aprendices.
                </q-item-label>
              </q-item-section>
            </q-item>


            <q-item>
              <q-item-section avatar>
                <q-icon name="📚" size="30px" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Biblioteca</q-item-label>
                <q-item-label caption>
                  Espacio para consulta, lectura e investigación.
                </q-item-label>
              </q-item-section>
            </q-item>


            <q-item>
              <q-item-section avatar>
                <q-icon name="🍔" size="30px" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Cafetería</q-item-label>
                <q-item-label caption>
                  Servicio de alimentos y bebidas para la comunidad.
                </q-item-label>
              </q-item-section>
            </q-item>


            <q-item>
              <q-item-section avatar>
                <q-icon name="👔" size="30px" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Coordinación</q-item-label>
                <q-item-label caption>
                  Orientación y atención relacionada con los procesos
                  administrativos y académicos.
                </q-item-label>
              </q-item-section>
            </q-item>

          </q-list>

        </q-card-section>

        <q-separator />
        
            <q-card class="integrante">
              <q-card-section class="text-center">
                  <q-icon name="👦🏻" size="60px" />
            
                <div class="text-h6 text-weight-bold q-mt-md">
                  Esteban Neira
                </div>

                <div class="text-subtitle1">
                  Desarrollador
                </div>

              </q-card-section>

            </q-card>

      </q-card>

    </div>

  </q-page>
</template>