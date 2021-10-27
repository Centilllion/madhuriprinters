import * as React from "react"
import mainblob from '../images/main-blob.svg'
import Header from './components/Header'

// service image start
import offsetprinting from '../images/offset-printing.jpg'
import digitalprinting from '../images/digital-printing.jpg'
import spiralbinding from '../images/spiral-binding.jpg'
import screenprinting from '../images/screen-printing.jpg'
// service image end

// styles images
import underline from '../images/underline.svg'
import wideunderline from '../images/wide-underline.svg'

// markup
const IndexPage = () => {
  return (
    <div class="bg-white">
      <Header />
      
{/* hero start */}
<section class="text-gray-800 body-font">
  <div class="container mx-auto flex p-5 lg:px-32 lg:py-12 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center z-10">
      <h1 class="relative title-font text-5xl md:text-7xl lg:text-8xl mb-10 font-medium">THE ART OF
        <br /> PRINTING
      <img class="absolute left-10 sm:left-40 md:left-50" src={wideunderline} alt="Stylish Underline SVG" />
      </h1>
      <p class="mb-8 lg:w-5/6 leading-relaxed md:text-xl">We use highest quality materials and technology that allow us to deliver the best product at your door step.</p>
      <button href="#" class="flex items-center btn-blue">
      CALL NOW <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
    </button>
    </div>
    <div class="absolute md:left-80 lg:relative lg:-left-40 lg:max-w-4xl lg:w-full md:w-1/2 w-5/6 z-0">
      <img class="object-cover object-center rounded" alt="blob effect" src={mainblob} />
    </div>
  </div>
  
</section>
{/* hero end */}

{/* services start */}

<section id="services" class="bg-white z-10">
  <div class="relative w-max mx-auto">

<h2 class="text-center text-gray-900 text-2xl md:text-4xl font-medium">Services We Offer</h2>
<img class="absolute left-36" src={underline} alt="Stylish Underline SVG" />
  </div>
<div class="container mx-auto grid gap-4 lg:gap-6 grid-col-1 place-content-center md:grid-cols-2 lg:grid-cols-4 p-5 lg:px-32">

<div>
<h4 class="text-gray-900 text-lg font-bold bg-transparent text-center my-4">Offset Printing</h4>
<figure class="imghvr-shutter-in-out-diag-2" >
  <img src={offsetprinting} alt="Offset Printing Machine" />
  <figcaption>
    <p class="text-lg mt-8">Best Offset printing in Jhargram locality. We have 20+ years of experience with satisfied customers.</p>
  </figcaption>
</figure>
</div>

<div>
<h4 class="text-gray-900 text-lg font-bold bg-transparent text-center my-4">Digital Printing</h4>
<figure class="imghvr-shutter-in-out-diag-2" >
  <img src={digitalprinting} alt="Digital Printing" />
  <figcaption>
    <p class="text-lg mt-8">Apart from Offset printing, we do the best digital printing as well.</p>
  </figcaption>
  </figure>
</div>

<div>
    <h4 class="text-gray-900 text-lg font-bold bg-transparent text-center my-4">Screen Printing</h4>
<figure class="imghvr-shutter-in-out-diag-2" >
  <img src={screenprinting} alt="A boy doing screen printing." />
  <figcaption>
    <p class="text-lg mt-8">We do screen printing as well as t shirt printing. Send us your designs we will print it and deliver at your doorstep.</p>
  </figcaption>
</figure>
</div>


<div>
<h4 class="text-gray-900 text-lg font-bold bg-transparent text-center my-4">Spiral Binding</h4>
<figure class="imghvr-shutter-in-out-diag-2" >
  <img src={spiralbinding} alt="Spiral Binding" />
  <figcaption>
    <p class="text-lg mt-8">Need to do book binding? Case binding and spiral binding is what we can do the best.</p>
  </figcaption>
  </figure>
</div>

</div>
</section>
{/* services end */}

{/* about us start */}

<section id="about" class="container mx-auto bg-white my-10">
<h2 class="text-center text-gray-900 text-2xl md:text-4xl font-medium">20+ YEARS OF EXPERIENCE</h2>
<p class="leading-relaxed w-full px-2 mt-4 text-center mx-auto md:w-5/6 md:text-xl lg:w-4/6 xl:w-1/2">We are one of the oldest printing services in Jhargram with 20+ years of experience. Rebranding to PRINTiT.</p>
<div class="md:mt-5"><button href="#" class="mx-auto flex items-center  btn-blue">
      CALL NOW <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
    </button> </div>


</section>


{/* about us end */}


{/* footer start */}

<footer class="container mx-auto p-5 md:font-medium">
  <p>Nunnungeria, Jhargram, West Bengal <br /> 721507. Phone no &rarr; <a href="tel:+91 89725 75288">+91 89725 75288</a></p>
</footer>

{/* footer end */}

<div class="container mx-auto flex justify-center items-center mb-10">
<div class="flex flex-row items-center">
  Made with <svg class="ml-1 mr-1" width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.84 3.60999C20.3292 3.099 19.7228 2.69364 19.0554 2.41708C18.3879 2.14052 17.6725 1.99817 16.95 1.99817C16.2275 1.99817 15.5121 2.14052 14.8446 2.41708C14.1772 2.69364 13.5708 3.099 13.06 3.60999L12 4.66999L10.94 3.60999C9.90831 2.5783 8.50903 1.9987 7.05 1.9987C5.59097 1.9987 4.19169 2.5783 3.16 3.60999C2.12831 4.64169 1.54871 6.04096 1.54871 7.49999C1.54871 8.95903 2.12831 10.3583 3.16 11.39L4.22 12.45L12 20.23L19.78 12.45L20.84 11.39C21.351 10.8792 21.7564 10.2728 22.0329 9.60535C22.3095 8.93789 22.4518 8.22248 22.4518 7.49999C22.4518 6.77751 22.3095 6.0621 22.0329 5.39464C21.7564 4.72718 21.351 4.12075 20.84 3.60999Z" fill="#FF0000" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> by<a class="ml-1 text-blue-600 hover:text-blue-800" target="_blank" rel="noopener" href="https://www.centilllion.com">Centilllion.com</a>
</div>
</div>







    </div>
  )
}

export default IndexPage
