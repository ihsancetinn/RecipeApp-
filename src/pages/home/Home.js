import React, { useState } from 'react';
import Header from '../../components/Header/header';
import axios from "axios";
import { MainContainer,HomeImg,ImgDiv } from './HomeStyle';
import RecipeCardComp from "./RecipeCardComp";
import homeSvg from "../../assets/home.svg";


const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const APP_ID = "e7d97938";
const APP_KEY = "9ef130e4342ca07734f9458ea5536129";
// console.log(APP_ID, APP_KEY);

const Home = () => {
    const [query, setQuery] = useState("apple");
    const [recipes, setRecipes] = useState();
    const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
    const getData = async () => {
        if (query !== "") {
            const result = await axios.get(url);
            if (result.status === 200) {
                // console.log(result.data.hits);
                setRecipes(result.data.hits);
            }

        } else {
            alert("Please fill the form");
        }
    };

    return (
        <div>
            <Header
                setQuery={setQuery}
                query={query}
                getData={getData}
                mealTypes={mealTypes}
                setMeal={setMeal}
                meal={meal}

            />
            {recipes ? (
                <MainContainer>
                    {recipes?.map((recipe, index) => (
                        <RecipeCardComp key={index} recipe={recipe?.recipe} />
                    ))}
                </MainContainer>
            ) : (<ImgDiv>
                <HomeImg src={homeSvg} />

            </ImgDiv>)}
        </div>
    );
};

export default Home;
