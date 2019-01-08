// Here you put the base url like http://localhost:5000/api/v1
// Importé tes routes.
import React from "react";
import {recette} from "./routesApi";

const baseUrl = "";

const api = {
    recipe: baseUrl + recette
};

export default api;