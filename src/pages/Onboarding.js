import { useState } from 'react';
import Nav from '../components/Nav';

const Onboarding = () => {
    
    const handleSubmit = () => {
        console.log('submitted');
    }

    const handleChange = () => {
        console.log('changed');
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
                            placeholder="Artist Name"
                            required={true}
                            value={""}
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
                            value={""}
                            onChange={handleChange}
                        />
                            <input
                            id="dob_month"
                            type="number"
                            name="dob_month"
                            placeholder="MM"
                            required={true}
                            value={""}
                            onChange={handleChange}
                        />
                        <input
                            id="dob_year"
                            type="number"
                            name="dob_year"
                            placeholder="YYYY"
                            required={true}
                            value={""}
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
                            checked={false}
                        />
                        <label htmlFor="man-gender-identity">Man</label>                   
                        <input 
                            id="woman-gender-identity"
                            type="radio"
                            name="gender_identity"
                            value="woman"
                            onChange={handleChange}
                            checked={false}
                        />
                        <label htmlFor="woman-gender-identity">Woman</label>
                        <input 
                            id="nonbinary-gender-identity"
                            type="radio"
                            name="gender_identity"
                            value="nonbinary"
                            onChange={handleChange}
                            checked={false}
                        />
                        <label htmlFor="nonbinary-gender-identity">Nonbinary</label>
                        <input 
                            id="more-gender-identity"
                            type="radio"
                            name="gender_identity"
                            value="more"
                            onChange={handleChange}
                            checked={false}
                        />
                        <label htmlFor="more-gender-identity">More</label>
                        </div>

                        <label htmlFor="show-gender">Show gender on my profile</label>
                        <input 
                            id="show-gender"
                            type="checkbox"
                            name="show_gender"
                            onChange={handleChange}
                            checked={false}
                        />

                        <label>Show Me</label>
                        <div className="multiple-input-container">
                            <input
                                id="festival-interest"
                                type="checkbox"
                                name="event_interest"
                                value="festivals"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="festival-interest">Festivals</label>
                            <input
                                id="concert-interest"
                                type="checkbox"
                                name="event_interest"
                                value="concerts"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="concert-interest">Concerts</label>
                            <input
                                id="house-interest"
                                type="checkbox"
                                name="event_interest"
                                value="house shows"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="house-interest">Houses</label>
                            <input
                                id="bar-interest"
                                type="checkbox"
                                name="event_interest"
                                value="bars"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="bar-interest">Bars</label>
                            <input
                                id="rave-interest"
                                type="checkbox"
                                name="event_interest"
                                value="raves"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="rave-interest">Raves</label>
                            <input
                                id="everything-interest"
                                type="checkbox"
                                name="event_interest"
                                value="everything"
                                onChange={handleChange}
                                checked={false}
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
                            value={""}
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


                            </div>

                    </section>

                </form>
            
            </div>
        </>
        
    )
}
export default Onboarding