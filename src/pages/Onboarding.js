import { useState } from 'react';
import Nav from '../components/Nav';

const Onboarding = () => {
    
    const [formData, setFormData] = useState({
        user_id: "",
        artist_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        show_gender: false,
        gender_identity: "man",
        event_interest: [],
        email: "",
        url: "",
        about: "",
        matches: []
    })

    const handleSubmit = () => {
        console.log('submitted');
    }

    const handleChange = (e) => {
        console.log('e', e);
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
        console.log('value: ' + value + ' name: ' + name);
        
        setFormData((state) => ({
            ...state,
            [name]: value
        }))

        console.log('formData ', formData);
   
    }


    
    return (
        <>
            <Nav
                minimal={true}
                setShowModal={() => {}}
                showModal={false}
            />
            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="artist_name">Artist Name</label>
                        <input
                            id="artist_name"
                            type="text"
                            name="artist_name"
                            placeholder="Artist Name"
                            required={true}
                            value={formData.artist_name}
                            onChange={handleChange}
                        />

                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="DD"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                            />
                                <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}
                            />
                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}
                            />
                        </div>

                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input 
                                id="man-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_identity === "man"}
                            />
                            <label htmlFor="man-gender-identity">Man</label>                   
                            <input 
                                id="woman-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_identity === "woman"}
                            />
                            <label htmlFor="woman-gender-identity">Woman</label>
                            <input 
                                id="nonbinary-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="nonbinary"
                                onChange={handleChange}
                                checked={formData.gender_identity === "nonbinary"}
                            />
                            <label htmlFor="nonbinary-gender-identity">Nonbinary</label>
                            <input 
                                id="more-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="more"
                                onChange={handleChange}
                                checked={formData.gender_identity === "more"}
                            />
                            <label htmlFor="more-gender-identity">More</label>
                        </div>

                        <input 
                            id="show-gender"
                            type="checkbox"
                            name="show_gender"
                            onChange={handleChange}
                            checked={formData.show_gender}
                        />
                        <label for="show-gender">Show gender on my profile</label>
                        

                        <label>Show Me</label>
                        <div className="multiple-input-container">
                            <input
                                id="festival-interest"
                                type="radio"
                                name="event_interest"
                                value="festivals"
                                onChange={handleChange}
                                checked={formData.event_interest === "festivals"}
                            />

                            <label htmlFor="festival-interest">Festivals</label>
                            
                            <input
                                id="concert-interest"
                                type="radio"
                                name="event_interest"
                                value="concerts"
                                onChange={handleChange}
                                checked={formData.event_interest === "concerts"}
                            />
                            
                            <label htmlFor="concert-interest">Concerts</label>
                            
                           <input
                                id="house-interest"
                                type="radio"
                                name="event_interest"
                                value="houses"
                                onChange={handleChange}
                                checked={formData.event_interest === "houses"}
                            />

                            <label htmlFor="house-interest">Houses</label>
                            
                            <input
                                id="bar-interest"
                                type="radio"
                                name="event_interest"
                                value="bars"
                                onChange={handleChange}
                                checked={formData.event_interest === "bars"}
                            />

                            <label htmlFor="bar-interest">Bars</label>
                            
                            <input
                                id="rave-interest"
                                type="radio"
                                name="event_interest"
                                value="raves"
                                onChange={handleChange}
                                checked={formData.event_interest === "raves"}
                            />
                            
                            <label htmlFor="rave-interest">Raves</label>
                            
                            <input
                                id="everything-interest"
                                type="radio"
                                name="event_interest"
                                value="everything"
                                onChange={handleChange}
                                checked={formData.event_interest === "everything"}
                            />
                            
                            <label htmlFor="everything-interest">Everything</label>
                        </div>
                        <input type="submit"/>
                    </section>


                    <section>
                        <label htmlFor="about">About Me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="Experimental pop artist..."
                            value={formData.about}
                            onChange={handleChange}
                        />
                        <label htmlFor="about">Profile Photo</label>
                            <input
                                type="url"
                                name="url"
                                id="url"
                                onChange={handleChange}
                                required={true}
                            />
                            <div className="photo-container">
                                <img src={formData.url} alt="profile pic preview" />

                            </div>

                    </section>

                </form>
            
            </div>
        </>
        
    )
}
export default Onboarding