const db = require("../db/dbConfig");

const fetchAllDocs = async () => {
  try {
    const allDocs = await db.any("SELECT * FROM doctors");
    return { success: true, payload: allDocs };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const fetchDoc = async (id) => {
  try {
    const oneDoc = await db.one(
      "SELECT * FROM doctors WHERE id=$1",
      id
    );
    return { success: true, payload: oneDoc };
  } catch (error) {
    return { success: false, payload: error };
  }
};

const newDoc = async (doc) => {
  const { first_name,last_name} =
    doc;
  try {
    const createdDoc = await db.one(
      `INSERT INTO appointments (last_name, last_name) VALUES ($1,$2) RETURNING *`,
      [first_name,last_name]
    );
    return { success: true, payload: createdDoc };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const updateDoc = async (id, Doc) => {
  const { first_name,last_name} =
    Doc;
  try {
    const updatedDoc = await db.one(
      `UPDATE doctors SET first_name=$1,last_name=$2 WHERE id=$3 RETURNING *`,
      [first_name,last_name, id]
    );
    return { success: true, payload: updatedDoc };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const deleteDoc = async (id) => {
  try {
    const deletedDoc = await db.one(`DELETE FROM doctors WHERE id=$1 RETURNING *`, id)
    return { success: true, payload: deletedDoc}
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
}

module.exports = { fetchAllDocs, fetchDoc, newDoc, updateDoc, deleteDoc };