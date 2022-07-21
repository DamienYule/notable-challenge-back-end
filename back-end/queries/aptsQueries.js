const db = require("../db/dbConfig");

const fetchAllApts = async (doctor_id) => {
  try {
    const allApts = await db.any("SELECT * FROM appointments WHERE doctor_id=$1",[doctor_id]);
    return { success: true, payload: allApts };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const fetchApt = async (id) => {
  try {
    const oneApt = await db.one(
      "SELECT * FROM appointments WHERE id=$1",
      id
    );
    return { success: true, payload: oneApt };
  } catch (error) {
    return { success: false, payload: error };
  }
};

const newApt = async (apt) => {
  const { doctor_id, patient_first_name, patient_last_name, date, time, kind} =
    apt;
  try {
    const createdApt = await db.one(
      `INSERT INTO appointments (doctor_id, patient_first_name, patient_last_name, date, time, kind) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [doctor_id, patient_first_name, patient_last_name, date, time, kind]
    );
    return { success: true, payload: createdApt };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const updateApt = async (id, apt) => {
  const { doctor_id, patient_first_name, patient_last_name, date, time, kind} =
    apt;
  try {
    const updatedApt = await db.one(
      `UPDATE appointments SET doctor_id=$1,patient_first_name=$2,patient_last_name=$3, date=$4, time=$5, kind=$6 WHERE id=$7 RETURNING *`,
      [doctor_id, patient_first_name, patient_last_name, date, time, kind, id]
    );
    return { success: true, payload: updatedApt };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const deleteApt = async (id) => {
  try {
    const deletedApt = await db.one(`DELETE FROM appointments WHERE id=$1 RETURNING *`, id)
    return { success: true, payload: deletedApt}
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
}

module.exports = { fetchAllApts, fetchApt, newApt, updateApt, deleteApt };