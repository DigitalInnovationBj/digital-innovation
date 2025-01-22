/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['Montserrat', 'sans-serif'], 
        heading: ['Fira Code', 'sans-serif'],
      },
      fontSize:{
        "heading-1":[
          "54px",{
            fontWeight: 660,
            lineHeight: "64px"
          }
        ],
        "heading-2":[
          "48px",{
            fontWeight: 600,
            lineHeight: "64px"
          }
        ],
        "heading-3":[
          "38px",{
            fontWeight: 600,
            lineHeight: "56px"
          }
        ],
        "heading-4":[
          "36px",{
            fontWeight: 500,
            lineHeight: "56px"
          }
        ],
        "heading-5":[
          "32px",{
            fontWeight: 500,
            lineHeight: "48px"
          }
        ],
        "heading-6":[
          "24px",{
            fontWeight: 500,
            lineHeight: "36px"
          }
        ],
        "paragraph":[
          "16px",{
            fontWeight: 400,
            lineHeight: "28px"
          }
        ],
        "large":[
          "24px",{
            fontWeight: 400,
            lineHeight: "36px"
          }
        ],
        "medium":[
          "18px",{
            fontWeight: 400,
            lineHeight: "27px"
          }
        ],
        "regular":[
          "16px",{
            fontWeight: 400,
            lineHeight: "24px"
          }
        ],
        "small":[
          "14px",{
            fontWeight: 400,
            lineHeight: "21px"
          }
        ],
        "tiny":[
          "12px",{
            fontWeight: 400,
            lineHeight: "18px"
          }
        ],
        "quote":[
          "24px",{
            fontWeight: 400,
            lineHeight: "36px"
          }
        ],
        "m-heading-1":[
          "52px",{
            fontWeight: 600,
            lineHeight: "52px"
          }
        ],
        "m-heading-2":[
          "32px",{
            fontWeight: 600,
            lineHeight: "44.8px"
          }
        ],
        "m-heading-3":[
          "24px",{
            fontWeight: 600,
            lineHeight: "36px"
          }
        ],
        "m-heading-4":[
          "20px",{
            fontWeight: 400,
            lineHeight: "30px"
          }
        ],
        "m-heading-5":[
          "16px",{
            fontWeight: 600,
            lineHeight: "24px"
          }
        ],
        "m-heading-6":[
          "14px",{
            fontWeight: 600,
            lineHeight: "21px"
          }
        ],
        "m-paragraph":[
          "16px",{
            fontWeight: 400,
            lineHeight: "24px"
          }
        ],
        "m-large":[
          "20px",{
            fontWeight: 400,
            lineHeight: "30px"
          }
        ],
        "m-medium":[
          "16px",{
            fontWeight: 400,
            lineHeight: "24px"
          }
        ],
        "m-regular":[
          "14px",{
            fontWeight: 400,
            lineHeight: "21px"
          }
        ],
        "m-small":[
          "12px",{
            fontWeight: 400,
            lineHeight: "18px"
          }
        ],
        "m-tiny":[
          "10px",{
            fontWeight: 400,
            lineHeight: "15px"
          }
        ],
        "m-quote":[
          "20px",{
            fontWeight: 400,
            lineHeight: "30px"
          }
        ]
      },
      colors:{
        "primary" : "#23ce6b",
        "secondary" : "#000877",
        "tertiary" : "#7e0000",
        "white" : "#cee5f2",
        "dark" : "#010400",
        "danger": "#ff0000",
        "warning" : "#ffb222",
        "light" : "#ffffff"
      },
      width:{
        "container-large" : "1280px",
        "container-medium" : "940px",
        "container-small" : "580px",
        "container":"500px"
      },
      maxWidth:{
        "xxlarge" : "1280px",
        "xlarge" : "1024px",
        "large" : "768px",
        "medium" : "512px",
        "small" : "320px",
        "xsmall" : "256px",
        "xxsmall" : "192px"
      },
      spacing:{
        "tiny" : "2px",
        "xxsmall" : "4px",
        "xsmall" : "8px",
        "small" : "16px",
        "medium" : "32px",
        "large" : "48px",
        "xlarge" : "64px",
        "xxlarge" : "80px",
        "huge" : "96px",
        "xhuge" : "128px",
        "xxhuge" : "192px",
      }
    },
  },
  plugins: [],
}