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