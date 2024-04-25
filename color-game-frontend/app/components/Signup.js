'use client'
import React, { useState, useContext } from 'react';
import Card from './UI/Card';
import Button from './Button';
import './Signup.css';
import ProfilePicButton from './ProfilePicButton';
import axios from 'axios';
import UserContext from '../context/UserContext';



const Signup = (props) => {

  const axios = require('axios');

  const { setUserData } = useContext(UserContext);

  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    image: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const handleUsername = (event) => {
    setFormData({
      ...formData,
      username: event.target.value,
    });
    setUsername(event.target.value);

  }

  const handlePass = (event) => {
    setFormData({
      ...formData,
      password: event.target.value,
    });
    setPass(event.target.value);
  }

  const handleEmail = (event) => {
    setFormData({
      ...formData,
      email: event.target.value,
    });
    setEmail(event.target.value);
  }

  const handleImage = (event) => {
    setFormData({
      ...formData,
      image: event.target.value,
    });
    setImage(event.target.value);
  }

  const handleButtonClick = (event) => {
    setImage(event.target.value)
    console.log("Image value: " + image);
};


  const submitHandler = (event) => {
    event.preventDefault();
    const userLogin = {
      name: username,
      password: pass,
      email: email,
      image: image,
    }
    console.log(userLogin);
    axios
      .post('http://localhost:8084/api/signup', userLogin)
      .then((res) => {
        props.onSaveUserData(userLogin);

        setUsername('')
        setPass('')
        setEmail('')
        setImg('')
      })
      .catch((err) => {
        console.log("Error in CreateItem: " + err)
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send signup request to the server
      console.log(formData);
      const signupRes = await axios.post('http://localhost:8084/api/users/signup', formData);
      console.log("Signup completed. Now need to login." + formData.email);
      // Send login request to the server
      console.log("Email: " + formData.email)
      /*
      const loginRes = await axios.post('http://localhost:8084/api/users/login', {
         email: formData.email,
         password: formData.password
       });
       */
      const loginRest = await axios.post('http://localhost:8084/api/users/login', formData);
       console.log("Login completed. Now to set the user data.");
      
      // Update user data upon successful signup
      setUserData({
        token: signupRes.data.token,
        user: signupRes.data.user
      });

      // Store the authentication token in local storage
      localStorage.setItem("auth-token", signupRes.data.token);
      console.log("Auth token stored in local storage. Now changing page.");

      // Optionally, you can redirect the user to another page upon successful signup
      router.push('/gameplay');
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle signup error
    }
  };

  return (
    <Card className="input">
      <form onSubmit={handleSubmit}>
        <label>E-Mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <label>Username</label>
        <input
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <label>Password</label>
        <input
          type="password"
          id="pass"
          value={pass}
          onChange={handlePass}
        />
        <center><h1>Choose a profile picture!</h1></center>
        
        <label>Image URL</label>
        <input
        id="image"
        value={image}
        onChange={handleImage}
        />
        

        <Button type="submit">Sign Up</Button>
      </form>
      
    </Card>
  );
};

export default Signup;

/*
<div className="profilePicButtonsContainer">
            <ProfilePicButton
                    onClick={handleButtonClick}
                    imageUrl={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECBAYHAwj/xABCEAACAQMCAgcGAgUKBwAAAAABAgMABBEFEiExBhMiQVFhcRQyUoGRoSOxQmJyosEHMzRTkrLC4fDxFSRDVILR4v/EABoBAAMAAwEAAAAAAAAAAAAAAAAEBQECAwb/xAAqEQACAgIBAwMDBAMAAAAAAAAAAQIDBBEhEjFBBRMiMjOBFEJRsSNhcf/aAAwDAQACEQMRAD8A7jSlKAFKUoAUpSgBSlUzQBaSFGTyqH1rWxYSLb20Qnu2XdsaTYsa+LHBxyOMDjV3SHWk0y3CRgPdyjEUZPAfrN+qPvyrRmdmLlmZ3dt8jtzkbxPyAAHcMCksvKVK0u43i4zue32J6TpHqfH8XTovSOSU/mtYFzrd7Oeql1F2JG7bbxCHI8zlj9CKjqwbGQTX984HBCkanyC5P3Y1M/WXST2yksOqLXBnSJbyndJaQSN3tMvWt9WzVogswQfYLPh8MAX7irqrg8POlfdn32d1XDtoyra8e3YG3uLq3I+CUuvptbIxU9Y9JjCoGr9UsPIXkZwn/mp9z14j0rVqvjbbuUjsONrDxB50zRmWQfL2he7EhNccM6Vb3NvcxiS2mjljPJ42DA/MV7Ag8q5Zo15LBHHc2wEd4mUc+6Jyp2lXHfnHvcxnPkekaXeRX9nHcwE7HXkeankQfMHgas0XxtT14JV1EqnyZlKpmlMHArSlKAFKUoAUpSgChqE6Qa/HpSiGNBNeuuUhzgAfEx7l/PuzU03PnXIbq5nXVL6SYlpmuX6zdzOGIA/sgClcq50w2hjFp92emZsjSzTvcXMhluJffkIxy5AeAHcKp38+NYyXsZ98FT9qpJeoB+GCT591eenKUn1MvRioR6Yl15N1aFF95uZ8BWJoXu3bfFcN9uH8K8ydzZY5yedemg/0eUnvmf8AvtW37GH7kSMjiONnPJRnhV8Q0t5fY5ukthb6u57NnlWVT3Ix5k+OCMHuNRnSVbh+j977ESLgRbk288gg8PPhXJ9c1yw1HQNK0+30aG1vLMH2i9V8tc57zw7+fM8ao+n49dkXKS2T826cJJRZ2hGZl7a7XUlHU/ospII+oNHZlUbE3uxCoucbiTgD61E9EXvJej9tPqBY3E67yW5kcgT5kDPzqvSxLl9BnNmhkljKS9WuQXVWyw4eIzSXtxWR0Ptsb65ey5edEmltLZXVzBLLBLuk61HgOUYHgceYYHIqZ6Naq2m6l1Mzf8pdsFJP/Tl5A+jcj548a5V0Euy2qateRWsdnb3DBo7NG7MfEnsjwHjit2a4gljZJNwDAgj/ADpiyX6fI3DscYQd9Gp9zranIyaVrHRXpBHd2Jt7y4T2m1wjSOdvWr+i3rw4+YNKsKcZLaZGcHF6aNqpSldTUUpSgBSlKAKGtD6adHZvapdV0+NpFfBuYVHaJAxvXx4AAjyBrfatI45rnZXGyPSzeuyVcupHEo3WRN6MGXlkePh61dXUdV6L6VqcpmmtxHcHnNCdjn1I5/OtR6S9D30rS7m+tNTkdYFDlJoAx25G45BHIZPyqTZ6fOPKfBVrz4S4kuTXeAwScetX9Hv6KT8TM3yLsR+dYZtTJwuZGlB95AAqn5DnUhYuqSFTwBGBSMtKOl5HltvZJVgQ9F9Nur/2iHSoJbgncWEff488VngEnFbY4Ok6aDaWjXDLjKIQM+LHyHkCaYwqJWyenpCuXdGpLa2yIi6P3be+Yo/InOK0b+Ue41TQr60tYJjHBLEXMsYwWIOCMnljh9a69DLHNAk0LrJG65V0OQw8qj+kGhaf0h082WpRb0B3KynDxt4qe41UhhVQ5ROlmWS4fY+fri/vLlQLi8uJBjhvlJx5ip7ovfXM3WQ3LPJGi9iV+JyMZUnv4EGp4fyUGPV0tY9bc2rRtKx9lHWKAwAGd23Jye7u5Vtb9EoZJLLR9HkW0trJGlmlK73ZnwB38WO0nJ5cOFFuO5xcWbV5KhJNM0240C/6QPt01QfZx2z3drkP3fvSuxaTo9vpVoLe0GBks7NxZ28SfH/KlbV4qUUmzSzLbk2kSdKUpoVFKUoAUpSgBSlUPAGgDzlkWKNpJGCoilmYnAAHMmtC6ZdI9Qn0i4fStkFqoG6WRcyTJntbQfdGOOTknwHOsnW9XXUyUXtacjdkf9yw78fAP3j5c4eWRpyTIc54be70qZlZqhLph+SliYnV85djSrDUWgaK1lRpFPZR1IJ4dxHf61I+3WoOHmEbeEgKH71G6tp/sM/Ukbrd+MRz3fD6j+GavtdTmhAjn3SRdzr7w9R3+o+hpSdcZ/KJalU2uuHb+idtL/gOrkSZRyCuDXQdP1S3u7WOTcV3KODf68q5WH028PO3Z/hcAN/A1IWdxPp4CwXrQQ5yVlIdB59rj9xW+JbGmT3vknZVErY7/g3PVNNuIriTUdHmdS6/jwQybQ5H6aggqW8cjjgcc1gvc6pN1S22qziGeIlJRFH2GwCpPZ5EVl6XZ6xeaZa3scVjKLiJJQFmaI4YZHNWH3rzTo5reSkCpaRnPD23cF8h+FkfI1YfPKJlcoR4miH6PaZqrzx6ncXk0d1qASGErLvLjO5mYHIwqq2B3Z866Vp1hHZJIFZ5JJG3ySScWc8sn/0Kj9B0Q6cUkuJhPMsXVR7VKpEnDsqCSeOBkk5OByqbFbLhHGcup7GKVWlZNRSlKAFKVTNAFapmqbhUFq3SBYpHtdOjFzcodshLYjiP6x7z37Rx9OdaykorbMxi5PSJa8u4LSB7i5mSKFB2nc4ArUdZ1STU0ZGVodO+BgQ9x+0O5fLme/HKsG5uC8y3F3Mbu5X3CRhIz+qvJfufOsOWV5Tlz6Y5CpORn7XTAqY+Dp9Uys0hlcse/kPAdwrzpSpW9vbKSWuEedzbxXUDQzoHRuYP5+ta1e6DdW5LWv8AzMWeXJx8uR9eFbTSuldsq/8AhvGUov4s5/cYTsXcfV/qzoV/OvJEtmP4EUUsgztWFQzZ8gK6EUFzdQWjs3UuGaRcntKoHZ+pGfIGsm/WPSbGe+sYo7eWBM4iXYJF70IHMY+9MRza1ZGEl3MW5klF/FG9dFk6ro3pcfHs2kQ4/sipSsTSUEWmWsYGAsKD90Vl16BHl29vYpSlZMClKUAUz41WtWsEuru2WW4v7tbsEpJ1bgKjqcEBcYxkcMg8K9IrzpAHkLpaOISFWPBX2kYyW3Z/DPdgg8jxoA2WrSa8LC8jvrRLiEna2eBGCpHAgjuIOQRUN0u1RrK0S1gcpcXRKhhzRBjcw+oA8zWs5qMXJm0Yub6UYWu60bmR7WzlMVshKTXCHtOw4FE8PNu7kOPLX2lHViGFFjiXgEUY4V557KqFCoihUUclA7qZrzuRkytffgvUY0al/spgUpSlhgUpSsAKUpQBZJHvKsrFJEbcjrzU/wCxIxUmmnvcaJcXd9c9dsjkZIliCKWUHaW4knBwR3ZrA51sXVlOjcMPfK0Sf25VH5E0/wCn1Rst3JdhDPfTXx5NstV2W8anuUflXrVF5VWr5GFKUoAUpSgDTOjUs0nXyXkrNczsHlQhQI5FG1gAB4j7VNuwRWZjgKMk+AqB6YpcaRcpqVkAEuWCTfqSclYeo4H0Wol9Wur23CyTlo2HEcqTyMyNL00N4+LK5bXY2TRL+E6xNBC5MF0vWrwxtkXAb5EFT8jWu6zde3a3dzjtLGfZ4+PDanP94t9BXjFqCaU0d/IcJbvvbj3YKn8x9KwNJ3iyQSndIOLk97HifuTSF+VKzHW/I7RjKF7a8GXSlKmFAUpSsgKVRHV1DIQykZBHI1WjQClKUAXxxmSRYwMlztFT2vXXsB0tEAIjuFmkU/1UYwT+8PpWN0dtlkme7kIEcBOP2sVH3t0NQ6Szo/GKKMW5z3Fhlv8ABVXEXsUuyXkm5P8AmtUI+DpSEFcjkauqM6NXLXeh2ckhzIE6uT9tDtb7g1J1XT2tkprT0KUpWTApSlAEfrWnrqek3dk5x10RUN8Ldx+Rwa5Np92VRWlXaXALr8J7/vmuznlXINatvY9b1C3+G4Zx5hu0P7xqb6jDcFIoenT1NxGsbW090OGWVkTlzBYVdp7blkB55zUdcyN1cMWcqZkPpxrLsX2zAfEMVIktQRWX1MkaUpXI2FVUZYDxIFUq+H+ej/aFZRhmHYjqxPb90EzIPTgw+zV7vIkalpHVVGOZ+X54qU0DS7e9k1C9uN5Q3RVV3YU7UQE/XI+VZvSJLNejmoW1sqK3UMyrGP0l7Q4+qiqUcCU/m3wIyzYxfQltmvqwYZUgg8iKvjXfIq+JxWLYNutweHM8qzbThcR5OBu41P00x5vjZ7/8SFjp2ozMv4ftT4UH+cYBUVfquP8AaoTSdys7OcyHts3xMTkn6mrLyG9WCwluo+rtZ+tmtxnJZi7Es3gdrcB4efK+wP4xH6v5U/mWPUa/4EsStc2b3s3/AKITYW/t+5ZxMo8nUE/vbq2PNaX0Rm26ts/rrU/VG/8AutzHKqmNPqqiyXkR6bWi6lKUwcRSlKALTyrRf5RNJKvFrEakxqvVXQA/RzlX+WSD5N5VvlWOm9drAEHmDXOytWRcWb1zdcupHD77It9/vGJhJgfpYOT9s17KwDBkIYcwRXQ7voLpUzFrdp7PJzst3wvyBBA+Va5q3Qy80lQdM6y9tVHuHHWx+gGAw9OI5cak2YNkY8c6K1edW3yY0UgkQMveKuqMt5nglaORJEI9+ORCrL4cDUjHIJE3LyqbKLi9MeWmtourzd3aUW9sN07LnB5IPiY9w+5xgV5XPXPMI0lW3jwCZDG7luJ4DaDt9cHnUrpaRBeostS0OJi2WDXEm9j4kNgk+dP4mIrNSkxLJyXD4pGVZWy2drHbqWYIDliPeJOST4ZOTXsyh1ZDyYYIrNj6PagwDS6pbIh7obT/ABM5/KtAupLqd5orq7nlVJJEK79qnaxHJceFVb7Y0x2ydTXK2fDPfR8rAYmzlDtOfEcP4VIK2M+QJ+xqG0PZDNcW8ahUWQlQBgAEBvzJqaVc5Hip/I1Alr3fyW1xXo2jWdIOodD4YIgPaLeGOWD9pV5fMZX51z+0lHWRSDgrePcDXRNO1DV/+HWrCws3UwoQFvGDHsjxjxWh6xHHb61cxRRvCkjdaIXGGiJPaXhwIycgjhhvKqufT1wU13RMwbemTi/JMaZcey6lZTMQFjuACT8LjYfuyn5V0gCuaWOk3t9aMo2xNtADOeXgcf65VvGlamLgLbXS9TfogMkLHn3FlP6S+f1wa39PUo16kjnndLs3FkrSlKfEhSlKAFKUoAVaQKUoA49qs0lzqt/cTNmQzOufAKxUAeWB9zXrp7ExYPLNVpXm8v70j0WOtVoyc8cd1bRotlbtYRvJGshlHa6wBhz5YNKUz6bFOzbFPUZNQ4L7jTbSzhnubGIWk0SM6tb9gEjuIHAj1Fc4t5WuEMr43O7sccsliarSm/UftIX9P+6xYHbq8oHLah/vD+FbTp1ok7IWZhxHLHnSlI1wi2m0PXSkk9MzrFWS20VDLI8N4TbSws2V2rG+CPA9gcvE1F3KB7ywmkzJLDO9urvxJQPKoz4kADj5UpVx/SRF9RI3VzLZ2ks9u22RE3A4znvwfKsi/HVXdw6E7ont7mMk52O0mxsZ5Bl4EeZpSs+DXybnSlKyApSlAH//2Q=="}
                    altText="cat 1"
            />
            <ProfilePicButton
                    onClick={handleButtonClick}
                    value={"data:image/jpeg;base64,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"}
                    altText="Image 2"
            />
            <ProfilePicButton
                    onClick={handleButtonClick}
                    value="data:image/jpeg;base64,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"
                    altText="Image 3"
            />
        </div>
        */