/* Single source of truth: category + calculator registry.
   Paths are relative to site root. Used by nav, search, homepage, category pages. */
const CATEGORIES = [
  { id:"math", label:"Math", icon:"📐", desc:"Arithmetic, algebra, matrices and number theory tools." },
  { id:"number-system", label:"Number System", icon:"🔢", desc:"Binary, decimal, hex, octal conversions and bitwise tools." },
  { id:"finance", label:"Finance", icon:"💰", desc:"Loans, interest, tax, salary and investment calculators." },
  { id:"health", label:"Health", icon:"❤️", desc:"BMI, calories, heart rate and pregnancy tools." },
  { id:"converter", label:"Converters", icon:"🔁", desc:"Length, weight, temperature, speed and unit converters." },
  { id:"education", label:"Education", icon:"🎓", desc:"Grades, GPA, CGPA and attendance calculators." },
  { id:"engineering", label:"Engineering", icon:"⚙️", desc:"Ohm's law, electrical and resistor tools." },
  { id:"programming", label:"Programming", icon:"💻", desc:"Password, hash, UUID and formatting dev tools." },
  { id:"time-tools", label:"Time Tools", icon:"⏱️", desc:"Date, time, shift and duration calculators." },
  { id:"utilities", label:"Utilities", icon:"🧰", desc:"QR codes, tips, bills and everyday helper tools." }
];

const CALCULATORS = [
  // ===== MATH =====
  { cat:"math", title:"Basic Calculator", url:"math/basic-calculator.html", desc:"Simple add, subtract, multiply and divide calculator.", icon:"➕", popular:true },
  { cat:"math", title:"Scientific Calculator", url:"math/scientific-calculator.html", desc:"Full scientific calculator with trig and log functions.", icon:"🧮", popular:true },
  { cat:"math", title:"Percentage Calculator", url:"math/percentage-calculator.html", desc:"Find percentages, increases and decreases instantly.", icon:"％", popular:true },
  { cat:"math", title:"Fraction Calculator", url:"math/fraction-calculator.html", desc:"Add, subtract, multiply and divide fractions.", icon:"➗" },
  { cat:"math", title:"Ratio Calculator", url:"math/ratio-calculator.html", desc:"Simplify and compare ratios easily." },
  { cat:"math", title:"Average Calculator", url:"math/average-calculator.html", desc:"Calculate mean, median and mode of numbers." },
  { cat:"math", title:"LCM Calculator", url:"math/lcm-calculator.html", desc:"Find the least common multiple of numbers." },
  { cat:"math", title:"GCD Calculator", url:"math/gcd-calculator.html", desc:"Find the greatest common divisor of numbers." },
  { cat:"math", title:"Prime Number Calculator", url:"math/prime-number-calculator.html", desc:"Check whether a number is prime." },
  { cat:"math", title:"Factorial Calculator", url:"math/factorial-calculator.html", desc:"Compute factorial of any non-negative integer." },
  { cat:"math", title:"Power Calculator", url:"math/power-calculator.html", desc:"Compute exponents / power of a number." },
  { cat:"math", title:"Square Root Calculator", url:"math/square-root-calculator.html", desc:"Find the square root of any number." },
  { cat:"math", title:"Cube Root Calculator", url:"math/cube-root-calculator.html", desc:"Find the cube root of any number." },
  { cat:"math", title:"Log Calculator", url:"math/log-calculator.html", desc:"Calculate logarithms with any base." },
  { cat:"math", title:"Quadratic Equation Solver", url:"math/quadratic-equation-calculator.html", desc:"Solve quadratic equations ax²+bx+c=0.", popular:true },
  { cat:"math", title:"Matrix Calculator", url:"math/matrix-calculator.html", desc:"Add, subtract and multiply 2x2/3x3 matrices." },
  { cat:"math", title:"Random Number Generator", url:"math/random-number-generator.html", desc:"Generate random numbers within a range." },

  // ===== NUMBER SYSTEM =====
  { cat:"number-system", title:"Binary to Decimal", url:"number-system/binary-to-decimal.html", desc:"Convert binary numbers to decimal.", popular:true },
  { cat:"number-system", title:"Decimal to Binary", url:"number-system/decimal-to-binary.html", desc:"Convert decimal numbers to binary." },
  { cat:"number-system", title:"Hexadecimal to Decimal", url:"number-system/hex-to-decimal.html", desc:"Convert hexadecimal to decimal." },
  { cat:"number-system", title:"Decimal to Hexadecimal", url:"number-system/decimal-to-hex.html", desc:"Convert decimal to hexadecimal." },
  { cat:"number-system", title:"Binary to Hexadecimal", url:"number-system/binary-to-hex.html", desc:"Convert binary to hexadecimal directly." },
  { cat:"number-system", title:"Octal Converter", url:"number-system/octal-converter.html", desc:"Convert octal to/from binary, decimal, hex." },
  { cat:"number-system", title:"Base64 Encoder / Decoder", url:"number-system/base64-converter.html", desc:"Encode or decode Base64 strings." },
  { cat:"number-system", title:"ASCII Converter", url:"number-system/ascii-converter.html", desc:"Convert text to ASCII codes and back." },
  { cat:"number-system", title:"Bitwise Calculator", url:"number-system/bitwise-calculator.html", desc:"AND, OR, XOR, NOT and shift operations." },

  // ===== FINANCE =====
  { cat:"finance", title:"EMI Calculator", url:"finance/emi-calculator.html", desc:"Calculate monthly loan EMI instantly.", popular:true },
  { cat:"finance", title:"Loan Calculator", url:"finance/loan-calculator.html", desc:"Calculate loan payments and total interest.", popular:true },
  { cat:"finance", title:"Mortgage Calculator", url:"finance/mortgage-calculator.html", desc:"Estimate monthly mortgage payments." },
  { cat:"finance", title:"Simple Interest Calculator", url:"finance/simple-interest-calculator.html", desc:"Calculate simple interest on principal." },
  { cat:"finance", title:"Compound Interest Calculator", url:"finance/compound-interest-calculator.html", desc:"Calculate compound interest growth.", popular:true },
  { cat:"finance", title:"ROI Calculator", url:"finance/roi-calculator.html", desc:"Calculate return on investment percentage." },
  { cat:"finance", title:"SIP Calculator", url:"finance/sip-calculator.html", desc:"Estimate SIP investment maturity value." },
  { cat:"finance", title:"Currency Converter", url:"finance/currency-converter.html", desc:"Convert between world currencies (manual rate)." },
  { cat:"finance", title:"Tax Calculator", url:"finance/tax-calculator.html", desc:"Estimate income tax based on rate slabs." },
  { cat:"finance", title:"VAT Calculator", url:"finance/vat-calculator.html", desc:"Add or remove VAT from a price." },
  { cat:"finance", title:"Discount Calculator", url:"finance/discount-calculator.html", desc:"Calculate discounted price and savings." },
  { cat:"finance", title:"Profit Margin Calculator", url:"finance/profit-margin-calculator.html", desc:"Calculate profit, margin and markup." },
  { cat:"finance", title:"Salary Calculator", url:"finance/salary-calculator.html", desc:"Convert salary between hourly/monthly/yearly." },

  // ===== HEALTH =====
  { cat:"health", title:"Age Calculator", url:"health/age-calculator.html", desc:"Calculate exact age in years, months, days.", popular:true },
  { cat:"health", title:"BMI Calculator", url:"health/bmi-calculator.html", desc:"Calculate Body Mass Index and category.", popular:true },
  { cat:"health", title:"BMR Calculator", url:"health/bmr-calculator.html", desc:"Calculate Basal Metabolic Rate." },
  { cat:"health", title:"TDEE Calculator", url:"health/tdee-calculator.html", desc:"Calculate Total Daily Energy Expenditure." },
  { cat:"health", title:"Calorie Calculator", url:"health/calorie-calculator.html", desc:"Estimate daily calorie needs." },
  { cat:"health", title:"Ideal Weight Calculator", url:"health/ideal-weight-calculator.html", desc:"Estimate ideal body weight." },
  { cat:"health", title:"Water Intake Calculator", url:"health/water-intake-calculator.html", desc:"Calculate recommended daily water intake." },
  { cat:"health", title:"Heart Rate Calculator", url:"health/heart-rate-calculator.html", desc:"Calculate target heart rate zones." },
  { cat:"health", title:"Pregnancy Due Date Calculator", url:"health/pregnancy-due-date-calculator.html", desc:"Estimate pregnancy due date." },

  // ===== CONVERTER =====
  { cat:"converter", title:"Length Converter", url:"converter/length-converter.html", desc:"Convert meters, feet, miles and more.", popular:true },
  { cat:"converter", title:"Weight Converter", url:"converter/weight-converter.html", desc:"Convert kg, pounds, ounces and more." },
  { cat:"converter", title:"Area Converter", url:"converter/area-converter.html", desc:"Convert square meters, acres, hectares." },
  { cat:"converter", title:"Volume Converter", url:"converter/volume-converter.html", desc:"Convert liters, gallons, cubic meters." },
  { cat:"converter", title:"Temperature Converter", url:"converter/temperature-converter.html", desc:"Convert Celsius, Fahrenheit, Kelvin.", popular:true },
  { cat:"converter", title:"Speed Converter", url:"converter/speed-converter.html", desc:"Convert km/h, mph, m/s and knots." },
  { cat:"converter", title:"Power Converter", url:"converter/power-converter.html", desc:"Convert watts, horsepower, kilowatts." },
  { cat:"converter", title:"Pressure Converter", url:"converter/pressure-converter.html", desc:"Convert pascal, bar, psi, atm." },
  { cat:"converter", title:"Energy Converter", url:"converter/energy-converter.html", desc:"Convert joules, calories, kWh." },
  { cat:"converter", title:"Data Storage Converter", url:"converter/storage-converter.html", desc:"Convert bytes, KB, MB, GB, TB." },
  { cat:"converter", title:"Angle Converter", url:"converter/angle-converter.html", desc:"Convert degrees, radians, gradians." },

  // ===== EDUCATION =====
  { cat:"education", title:"Percentage Marks Calculator", url:"education/marks-percentage-calculator.html", desc:"Calculate percentage from marks scored.", popular:true },
  { cat:"education", title:"Grade Calculator", url:"education/grade-calculator.html", desc:"Calculate letter grade from marks." },
  { cat:"education", title:"GPA Calculator", url:"education/gpa-calculator.html", desc:"Calculate Grade Point Average.", popular:true },
  { cat:"education", title:"CGPA Calculator", url:"education/cgpa-calculator.html", desc:"Calculate Cumulative GPA across semesters." },
  { cat:"education", title:"Attendance Calculator", url:"education/attendance-calculator.html", desc:"Calculate attendance percentage needed." },

  // ===== ENGINEERING =====
  { cat:"engineering", title:"Ohm's Law Calculator", url:"engineering/ohms-law-calculator.html", desc:"Calculate voltage, current or resistance.", popular:true },
  { cat:"engineering", title:"Voltage Divider Calculator", url:"engineering/voltage-calculator.html", desc:"Calculate output voltage of a divider circuit." },
  { cat:"engineering", title:"Electrical Power Calculator", url:"engineering/power-calculator.html", desc:"Calculate electrical power (watts)." },
  { cat:"engineering", title:"Resistor Color Code Calculator", url:"engineering/resistor-color-code-calculator.html", desc:"Decode resistor value from color bands." },

  // ===== PROGRAMMING =====
  { cat:"programming", title:"Password Generator", url:"programming/password-generator.html", desc:"Generate strong random passwords.", popular:true },
  { cat:"programming", title:"UUID Generator", url:"programming/uuid-generator.html", desc:"Generate random UUID v4 identifiers." },
  { cat:"programming", title:"Hash Generator", url:"programming/hash-generator.html", desc:"Generate SHA-256 hash of text." },
  { cat:"programming", title:"Lorem Ipsum Generator", url:"programming/lorem-ipsum-generator.html", desc:"Generate placeholder Lorem Ipsum text." },
  { cat:"programming", title:"JSON Formatter", url:"programming/json-formatter.html", desc:"Format and validate JSON data." },
  { cat:"programming", title:"Case Converter", url:"programming/case-converter.html", desc:"Convert text case: upper, lower, camel, snake." },

  // ===== TIME TOOLS =====
  { cat:"time-tools", title:"Date Difference Calculator", url:"time-tools/date-difference-calculator.html", desc:"Calculate days between two dates.", popular:true },
  { cat:"time-tools", title:"Time Difference Calculator", url:"time-tools/time-difference-calculator.html", desc:"Calculate the duration between two times, handling overnight wraparound." },
  { cat:"time-tools", title:"Countdown Timer", url:"time-tools/countdown-timer.html", desc:"Countdown to any future date and time." },
  { cat:"time-tools", title:"Stopwatch", url:"time-tools/stopwatch.html", desc:"Simple online stopwatch with lap times." },
  { cat:"time-tools", title:"Working Days Calculator", url:"time-tools/working-days-calculator.html", desc:"Calculate business days between two dates." },
  { cat:"time-tools", title:"Timezone Converter", url:"time-tools/timezone-converter.html", desc:"Convert time between timezones." },
  { cat:"time-tools", title:"12-Hour to 24-Hour Converter", url:"time-tools/12-24-hour-converter.html", desc:"Convert between AM/PM and 24-hour time." },
  { cat:"time-tools", title:"Work Shift & Break Time Calculator", url:"time-tools/work-shift-calculator.html", desc:"Calculate total working time across unlimited shift phases and breaks, in unambiguous 24-hour time, with overnight support.", popular:true },

  // ===== UTILITIES =====
  { cat:"utilities", title:"QR Code Generator", url:"utilities/qr-generator.html", desc:"Generate a QR code from text or URL.", popular:true },
  { cat:"utilities", title:"Password Strength Checker", url:"utilities/password-strength-checker.html", desc:"Check how strong your password is." },
  { cat:"utilities", title:"Fuel Cost Calculator", url:"utilities/fuel-cost-calculator.html", desc:"Calculate trip fuel cost from distance & mileage." },
  { cat:"utilities", title:"Mileage Calculator", url:"utilities/mileage-calculator.html", desc:"Calculate vehicle fuel mileage (km/l, mpg)." },
  { cat:"utilities", title:"Split Bill Calculator", url:"utilities/split-bill-calculator.html", desc:"Split a bill evenly among people.", popular:true },
  { cat:"utilities", title:"Tip Calculator", url:"utilities/tip-calculator.html", desc:"Calculate tip amount and total bill." },
  { cat:"utilities", title:"Color Converter", url:"utilities/color-converter.html", desc:"Convert HEX, RGB and HSL color codes." },
  { cat:"utilities", title:"Aspect Ratio Calculator", url:"utilities/aspect-ratio-calculator.html", desc:"Calculate image/video aspect ratio dimensions." },
  { cat:"utilities", title:"REM to PX Converter", url:"utilities/rem-px-converter.html", desc:"Convert CSS REM units to pixels and back." }
];

function calcsByCategory(catId){ return CALCULATORS.filter(c=>c.cat===catId); }
function categoryLabel(catId){ const c=CATEGORIES.find(x=>x.id===catId); return c?c.label:catId; }
