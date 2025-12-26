import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | EverPark',
  description: 'Política de privacidad de EverPark - Cómo recopilamos, usamos y protegemos tu información.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Política de Privacidad</h1>
        <p className="text-gray-500 mb-12">Última actualización: Enero 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información que recopilamos</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              EverPark recopila información para proporcionar y mejorar nuestros servicios de parking. 
              Los tipos de información que podemos recopilar incluyen:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Información de cuenta:</strong> Nombre, dirección de correo electrónico, número de teléfono y contraseña cuando creas una cuenta.</li>
              <li><strong>Información de ubicación:</strong> Con tu consentimiento, recopilamos datos de ubicación para mostrarte plazas de parking cercanas y facilitar la navegación.</li>
              <li><strong>Información del vehículo:</strong> Matrícula y tipo de vehículo para gestionar reservas y accesos.</li>
              <li><strong>Información de pago:</strong> Datos de tarjeta de crédito/débito procesados de forma segura a través de proveedores de pago certificados (no almacenamos datos completos de tarjetas).</li>
              <li><strong>Datos de uso:</strong> Información sobre cómo interactúas con la aplicación, incluyendo búsquedas, reservas y preferencias.</li>
              <li><strong>Información del dispositivo:</strong> Modelo de dispositivo, sistema operativo, identificadores únicos y datos de red móvil.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cómo usamos tu información</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Proporcionar, mantener y mejorar nuestros servicios de parking.</li>
              <li>Procesar transacciones y enviar notificaciones relacionadas.</li>
              <li>Conectarte con otros usuarios para intercambios de plazas (EverPark Exchanges).</li>
              <li>Personalizar tu experiencia y ofrecer recomendaciones relevantes.</li>
              <li>Comunicarnos contigo sobre actualizaciones, promociones y soporte.</li>
              <li>Detectar, investigar y prevenir actividades fraudulentas.</li>
              <li>Cumplir con obligaciones legales.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Compartición de información</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              No vendemos tu información personal. Podemos compartir información en las siguientes circunstancias:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Con otros usuarios:</strong> Información limitada necesaria para completar intercambios o reservas (por ejemplo, nombre y ubicación aproximada).</li>
              <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar (procesamiento de pagos, análisis, atención al cliente).</li>
              <li><strong>Propietarios de garajes:</strong> Información necesaria para gestionar reservas en garajes privados.</li>
              <li><strong>Por motivos legales:</strong> Cuando sea requerido por ley o para proteger derechos y seguridad.</li>
              <li><strong>Transferencias empresariales:</strong> En caso de fusión, adquisición o venta de activos.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Seguridad de datos</h2>
            <p className="text-gray-600 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información, 
              incluyendo cifrado de datos en tránsito y en reposo, acceso restringido a datos personales, 
              y auditorías de seguridad regulares. Sin embargo, ningún método de transmisión por Internet 
              es 100% seguro.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Retención de datos</h2>
            <p className="text-gray-600 leading-relaxed">
              Conservamos tu información mientras tu cuenta esté activa o sea necesario para proporcionarte 
              servicios. Puedes solicitar la eliminación de tu cuenta y datos asociados en cualquier momento. 
              Algunos datos pueden retenerse por períodos más largos cuando sea requerido por ley o para 
              fines legítimos de negocio.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Tus derechos</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Bajo el RGPD y la LOPDGDD, tienes derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Acceso:</strong> Solicitar una copia de tus datos personales.</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos (&ldquo;derecho al olvido&rdquo;).</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado y legible.</li>
              <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos en ciertas circunstancias.</li>
              <li><strong>Limitación:</strong> Solicitar la restricción del procesamiento de tus datos.</li>
            </ul>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Para ejercer estos derechos, contacta con nosotros en <a href="mailto:privacy@everpark.app" className="text-[#00b58e] hover:underline">privacy@everpark.app</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies y tecnologías similares</h2>
            <p className="text-gray-600 leading-relaxed">
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el uso 
              de la aplicación y personalizar contenido. Puedes gestionar tus preferencias de cookies 
              a través de la configuración de tu dispositivo o navegador.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Servicios de terceros</h2>
            <p className="text-gray-600 leading-relaxed">
              Nuestra aplicación puede contener enlaces a servicios de terceros (mapas, procesadores de pago). 
              Esta política no se aplica a esos servicios y te recomendamos revisar sus políticas de privacidad.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Menores</h2>
            <p className="text-gray-600 leading-relaxed">
              EverPark no está dirigido a menores de 18 años. No recopilamos intencionadamente información 
              de menores. Si descubrimos que hemos recopilado datos de un menor, los eliminaremos inmediatamente.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Cambios en esta política</h2>
            <p className="text-gray-600 leading-relaxed">
              Podemos actualizar esta política periódicamente. Te notificaremos sobre cambios significativos 
              a través de la aplicación o por correo electrónico. El uso continuado de EverPark después de 
              los cambios constituye tu aceptación de la política revisada.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contacto</h2>
            <p className="text-gray-600 leading-relaxed">
              Si tienes preguntas sobre esta política de privacidad o sobre cómo tratamos tus datos, 
              puedes contactarnos en:
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-900 font-semibold">EverPark</p>
              <p className="text-gray-600">Valencia, España</p>
              <p className="text-gray-600">Email: <a href="mailto:privacy@everpark.app" className="text-[#00b58e] hover:underline">privacy@everpark.app</a></p>
              <p className="text-gray-600">Web: <a href="https://everpark.app" className="text-[#00b58e] hover:underline">everpark.app</a></p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Autoridad de control</h2>
            <p className="text-gray-600 leading-relaxed">
              Si consideras que el tratamiento de tus datos personales infringe la normativa, tienes derecho 
              a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) u otra 
              autoridad de control competente.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <a href="/" className="inline-flex items-center gap-2 text-[#00b58e] hover:underline font-medium">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a EverPark
          </a>
        </div>
      </div>
    </main>
  );
}

