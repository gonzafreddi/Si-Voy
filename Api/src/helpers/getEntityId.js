//funcion para buscar el id de cualquier identidad , le pasamos el modelo y el nombre 
// y busca su respectivo ID

export const getEntityId = async (model, name) => {
  try {
    const entity = await model.findOne({ where: { name } });
    console.log(name, model)
    if (!entity) {
      throw new Error(`${model.name} not found`);
    }

    return entity.id;
  } catch (error) {
    throw new Error(`Error getting ${model.name} ID: ${error.message}`);
  }
};