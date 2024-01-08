import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
} from "react-native";
import Formulario from "./src/components/Formulario";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administración de citas{" "}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>
      {pacientes.length === 0 ? (
        <Text style={styles.noPacientes}>No hay pacientes</Text>
      ) : (
        <FlatList
          data={pacientes}
          keyExtractor={(item) => {
            item.id;
          }}
          renderItem={() => {}}
        />
      )}
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f6",
    flex: 1,
  },
  titulo: {
    textAlign: "center",
    fontSize: 25,
    color: "#374151",
    fontWeight: "600",
  },
  tituloBold: {
    fontWeight: "900",
    color: "#6d28d9",
  },
  btnNuevaCita: {
    backgroundColor: "#6d28d9",
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  noPacientes: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
});
