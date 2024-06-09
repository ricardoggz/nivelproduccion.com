/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    // Configura la carpeta donde se encuentran las páginas
    /*pagesDir: './src/pages',*/
    generateStaticParams(){
        return {
          '/': { page : '/'},  
        }
      },
};

export default nextConfig;
