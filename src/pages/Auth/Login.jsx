import  { useState, useRef, useEffect } from 'react';
import './Register.css'; // Import your CSS file
// import { Link } from 'react-router-dom';
// import AllWorksCTA from "https://framer.com/m/All-Works-CTA-gpas.js@A9J659vnd2OCgRX0kMlt"

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const eyeRef = useRef(null);
  const beamRef = useRef(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    document.getElementById('password').type = showPassword ? 'text' : 'password';
  };

//   const toggleShowConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//     document.getElementById('confirmPassword').type = showConfirmPassword ? 'text' : 'password';
//   };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement your registration logic here (e.g., API call)
    console.log([username,password,email]);
    setUsername("");
    setPassword("");
    setEmail("");

    // Handle successful or failed registration (e.g., reset forms, show errors)
  };

  useEffect(() => {
    const eye = eyeRef.current;
    const beam = beamRef.current;

    if (eye && beam) {
      const root = document.documentElement;

      const handleMouseMove = (e) => {
        const rect = beam.getBoundingClientRect();
        const mouseX = rect.right + (rect.width / 2);
        const mouseY = rect.top + (rect.height / 2);
        const rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
        const degrees = (rad * (20 / Math.PI) * -1) - 350;

        root.style.setProperty('--beamDegrees', `${degrees}deg`);
      };

      root.addEventListener('mousemove', handleMouseMove);

      const handleEyeClick = (e) => {
        e.preventDefault();
        document.body.classList.toggle('show-password');
        document.getElementById('password').type = document.getElementById('password').type === 'password' ? 'text' : 'password';
        document.getElementById('password').focus();
      };

      eye.addEventListener('click', handleEyeClick);

      return () => {
        root.removeEventListener('mousemove', handleMouseMove);
        eye.removeEventListener('click', handleEyeClick);
      };
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="register-form login-form">
      <h1 className="register-font">Login</h1>
      
      <div className="form-item">
        <label className='register-label' htmlFor="email">Email</label>
        <input
        className='register-input'
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          autoComplete="off"
          // autocorrect="off"
          // autocapitalize="off"
          // spellcheck="false"
          data-lpignore="true"
          required
        />
      </div>
      <div className="form-item">
        <label htmlFor="password">Password</label>
        <div className="input-wrapper">
          <input
          className='register-input'
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="off"
            // autocorrect="off"
            // autocapitalize="off"
            // spellcheck="false"
            data-lpignore="true"
            required
          />
          <button type="button" id="eyeball" ref={eyeRef}>
            <div className="eye"></div>
          </button>
          <div id="beam" ref={beamRef}></div>
        </div>
      </div>
      
      <button type="submit" id="submit">
        Login
      </button>
      
    </form>
  );
};

export default Login;






















// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input"; // Correct input import
// import { useForm } from "react-hook-form";


// export default function Login() {
//     const form = useForm({
//         defaultValues: {
//             // email: "",
//             password: "",
//             fullname: "",
//         },
//     });

//     const onSubmit = (data) => {
//         console.log("login details -->", data);
//     };
//   return (
//     <>
//             <div className="space-y-5  ">
//                 <h1>Login</h1>
//                 <Form {...form}>
//                     <form className="" onSubmit={form.handleSubmit(onSubmit)}>
//                         <FormField
//                             control={form.control}
//                             name="fullname"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <div className="flex gap-3">
//                                         <div>
//                                             <FormLabel>
//                                                 <p style={{ textAlign: "right", marginBottom: "4px", marginLeft: "2px" }}>
//                                                 Username
//                                                 </p>
//                                             </FormLabel>
//                                             <FormControl>
//                                                 <Input
//                                                     {...field}
//                                                     type="text"
//                                                     className="border w-full border-gray-700 py-5 px-4 mr-12 ml-2 pr-44"
                                                   
//                                                 />
//                                             </FormControl>
//                                             <FormDescription className="ml-2">
//                                                 Enter your username!
//                                             </FormDescription>
//                                         </div>
//                                     </div>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />
//                         <FormField
//                             control={form.control}
//                             name="password"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <div className="flex gap-3">
//                                         <div>
//                                             <FormLabel>
//                                                 <p style={{ textAlign: "right", marginBottom: "4px", marginLeft: "2px" }}>
//                                                     Password
//                                                 </p>
//                                             </FormLabel>
//                                             <FormControl>
//                                                 <Input
//                                                     {...field}
//                                                     type="text"
//                                                     className="border w-full border-gray-700 py-5 px-4 mr-12 ml-2 pr-44"
                                                   
//                                                 />
//                                             </FormControl>
//                                             <FormDescription className="ml-2">
//                                                 Enter your password!
//                                             </FormDescription>
//                                         </div>
//                                     </div>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />
//                         <Button type="submit" className="w-[100px] mt-5 ml-8">
//                             Login
//                         </Button>
//                     </form>
//                 </Form>
//             </div>
//         </>
//   );
// }