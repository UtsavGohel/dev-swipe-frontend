import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../../constants/apiEndpoint.const";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/slices/userSlice";
import { PlusIcon, TrashIcon } from "lucide-react";

// const ProfileView: React.FC<ProfileViewProps> = ({ userProfile }) => {
//   return (
//     <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
//       {/* Cover Image */}
//       <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>

//       {/* Profile Info */}
//       <div className="px-6 pb-6">
//         {/* Profile Image */}
//         <div className="relative -mt-16 mb-4">
//           <img
//             src={userProfile.image}
//             alt={userProfile.name}
//             className="w-32 h-32 rounded-full border-4 border-gray-800 object-cover"
//           />
//         </div>

//         <div className="mb-6">
//           <div className="flex items-center mb-1">
//             <h2 className="text-2xl font-bold mr-2">{userProfile.name}</h2>
//             <span className="text-xl">{userProfile.age}</span>
//           </div>
//           <p className="text-blue-300 font-medium">{userProfile.role}</p>
//         </div>

//         <div className="space-y-4">
//           <div>
//             <h3 className="text-lg font-semibold mb-2">About Me</h3>
//             <p className="text-gray-300">{userProfile.bio}</p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-2">Skills</h3>
//             <div className="flex flex-wrap gap-2">
//               {userProfile.skills.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1 bg-gray-700 rounded-full text-sm font-medium"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <h3 className="text-lg font-semibold mb-2">Location</h3>
//               <p className="text-gray-300">{userProfile.location}</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-2">Experience</h3>
//               <p className="text-gray-300">{userProfile.experience}</p>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-2">Education</h3>
//             <p className="text-gray-300">{userProfile.education}</p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-2">Links</h3>
//             <div className="space-y-1">
//               <p className="text-blue-400 hover:underline cursor-pointer">
//                 GitHub: {userProfile.github}
//               </p>
//               <p className="text-blue-400 hover:underline cursor-pointer">
//                 Website: {userProfile.website}
//               </p>
//             </div>
//           </div>
//         </div>

//         <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-medium transition-colors">
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfileView;

const ProfileView = () => {
  const user = useSelector(
    (store: {
      user: {
        data: {
          firstName: string;
          lastName: string;
          age: string;
          gender: string;
          userImage: string;
          designation: string;
          github: string;
          website: string;
          education: string;
          experience: string;
          city: string;
          bio: string;
          skills: string;
        };
      };
    }) => store.user
  );
  console.log(`🚀 ~ ProfileView ~ user:`, user);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const {
    firstName: firstNameValue,
    lastName: lastNameValue,
    age: ageValue,
    gender: genderValue,
    userImage: photoValue,
    designation: designationValue,
    website: websiteValue,
    github: githubValue,
    education: educationValue,
    experience: experienceValue,
    city: cityValue,
    bio: bioValue,
    skills: skillsValue,
  } = user.user.data;
  const [firstName, setFirstName] = useState(firstNameValue);
  const [lastName, setLastName] = useState(lastNameValue);
  const [age, setAge] = useState(ageValue);
  const [gender, setGender] = useState(genderValue);
  const [photoURL, setPhotoURL] = useState(photoValue);
  const [designation, setDesignation] = useState(designationValue);
  const [github, setGithub] = useState(githubValue);
  const [website, setWebsite] = useState(websiteValue);
  const [bio, setBio] = useState(bioValue);
  const [city, setCity] = useState(cityValue);
  const [experience, setExperience] = useState(experienceValue);
  const [education, setEducation] = useState(educationValue);
  console.log(`🚀 ~ ProfileView ~ designation:`, designation);

  const [skillsData, setSkillsData] = useState<string[]>(
    skillsValue ? skillsValue.split(",") : []
  );

  const updatedSkills = skillsData.join(",");

  const handleSave = async () => {
    setIsEditing(false);

    try {
      const profile = await axios.post(
        `${baseUrl}/users/edit-profile`,
        {
          firstName,
          lastName,
          age: Number(age),
          gender,
          userImage: photoURL,
          designation,
          bio,
          github,
          website,
          city,
          experience,
          education,
          skills: updatedSkills,
        },
        { withCredentials: true }
      );

      console.log(`🚀 ~ handleSave ~ profile:`, profile.data);
      if (profile) {
        dispatch(addUser(profile.data.data));
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const handleAddSkill = () => {
    setSkillsData([...skillsData, ""]); // Add an empty string to the array for a new input field
  };

  // Remove a skill
  const handleRemoveSkill = (index: number) => {
    const newSkills = [...skillsData];
    newSkills.splice(index, 1); // Remove the skill at the specified index
    setSkillsData(newSkills);
  };

  // Handle skill input change
  const handleSkillChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newSkills = [...skillsData];
    newSkills[index] = e.target.value;
    setSkillsData(newSkills);
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto">
      {/* Cover Image */}
      <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>

      {/* Profile Info */}
      <div className="px-6 pb-6">
        {/* Profile Image */}
        <div className="relative -mt-16 mb-4">
          <img
            src={photoURL}
            alt={photoURL || ""}
            className="w-32 h-32 rounded-full border-4 border-gray-800 object-cover"
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-2">
            {isEditing ? (
              <div className="flex-1">
                <label htmlFor="firstName" className="text-gray-300 text-sm">
                  first Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-2 mt-1 text-white bg-gray-700 rounded-lg border-2 border-blue-500 focus:ring-2 focus:ring-blue-300"
                />
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mr-2">{firstName}</h2>
              </>
            )}
            {isEditing ? (
              <div className="flex-1">
                <label htmlFor="name" className="text-gray-300 text-sm mx-3">
                  lastName
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-2 mx-2 mt-1 text-white bg-gray-700 rounded-lg border-2 border-blue-500 focus:ring-2 focus:ring-blue-300"
                />
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mr-2">{lastName}</h2>
              </>
            )}

            {isEditing ? (
              <div className="ml-4 flex-1">
                <label htmlFor="age" className="text-gray-300 text-sm">
                  Age
                </label>
                <input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(String(e.target.value))}
                  className="w- p-2 mt-1 text-white bg-gray-700 rounded-lg border-2 border-blue-500 focus:ring-2 focus:ring-blue-300"
                />
              </div>
            ) : (
              <span className="text-xl">{age}</span>
            )}

            {isEditing && (
              <div className=" flex-1">
                <label
                  htmlFor="imageURL"
                  className="text-gray-300 text-sm mx-2"
                >
                  Profile Image URL
                </label>
                <input
                  id="imageURL"
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)} // Update the image URL state
                  className="w-full p-2 mt-1 mx-2 text-white bg-gray-700 rounded-lg border-2 border-blue-500 focus:ring-2 focus:ring-blue-300"
                />
              </div>
            )}
          </div>

          {isEditing ? (
            <div className="mt-4">
              <label htmlFor="role" className="text-gray-300 text-sm">
                Role
              </label>
              <input
                id="role"
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-full p-2 mt-1 text-white bg-gray-700 rounded-lg border-2 border-blue-500 focus:ring-2 focus:ring-blue-300"
              />
            </div>
          ) : (
            <p className="text-blue-300 font-medium">
              {designation || "No designation"}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            {isEditing ? (
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full p-2 h-32 text-white bg-gray-700 rounded-lg border-2 border-blue-500 focus:ring-2 focus:ring-blue-300"
              />
            ) : (
              <p className="text-gray-300">{bio}</p>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            {isEditing ? (
              <div className="flex flex-wrap gap-2">
                {skillsData?.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start w-1/2 md:w-1/4"
                  >
                    <label
                      htmlFor={`skill-${index}`}
                      className="text-gray-300 text-sm"
                    >
                      Skill {index + 1}
                    </label>
                    <div className="flex items-center">
                      <input
                        id={`skill-${index}`}
                        value={skill}
                        onChange={(e) => handleSkillChange(e, index)}
                        className="w-full p-2 mt-1 text-white bg-gray-700 rounded-lg border-2 border-blue-500 focus:ring-2 focus:ring-blue-300"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  onClick={handleAddSkill} // Add new input
                  className="bg-blue-500 px-3 py-1 mt-6 rounded-lg text-white text-sm hover:bg-blue-600 ml-2"
                >
                  <PlusIcon className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {skillsData?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-2 text-white bg-gray-700 rounded-lg border-2 border-blue-500 focus:ring-2 focus:ring-blue-300"
                />
              ) : (
                <p className="text-gray-300">{city}</p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full p-2 text-white bg-gray-700 rounded-lg border-2 border-blue-500 focus:ring-2 focus:ring-blue-300"
                />
              ) : (
                <p className="text-gray-300">{experience}</p>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            {isEditing ? (
              <input
                type="text"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="w-full p-2 text-white bg-gray-700 rounded-lg border-2 border-blue-500 focus:ring-2 focus:ring-blue-300"
              />
            ) : (
              <p className="text-gray-300">{education}</p>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <div className="space-y-1">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    className="w-full p-2 text-white bg-gray-700 rounded-lg border-2 border-blue-500 focus:ring-2 focus:ring-blue-300"
                  />
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full p-2 text-white bg-gray-700 rounded-lg border-2 border-blue-500 focus:ring-2 focus:ring-blue-300"
                  />
                </>
              ) : (
                <>
                  <p className="text-blue-400 hover:underline cursor-pointer">
                    GitHub: {github}
                  </p>
                  <p className="text-blue-400 hover:underline cursor-pointer">
                    Website: {website}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <button
          className="w-full mt-6 bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-medium transition-colors"
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
        >
          {isEditing ? "Save Profile" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default ProfileView;
