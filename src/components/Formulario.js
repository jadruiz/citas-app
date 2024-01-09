import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  Modal,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const Formulario = ({
  modalVisible,
  setModalVisible,
  setPacientes,
  pacientes,
  paciente: pacienteObj,
}) => {
  const [id, setId] = useState("");
  const [paciente, setPaciente] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [fecha, setFecha] = useState(new Date());
  useEffect(() => {
    if (Object.keys(pacienteObj).lenght > 0) {
      setId(pacienteObj.id);
      setPaciente(pacienteObj.paciente);
      setPropietario(pacienteObj.propietario);
      setEmail(pacienteObj.email);
      setTelefono(pacienteObj.telefono);
      setSintomas(pacienteObj.sintomas);
      setFecha(pacienteObj.fecha);
    }
  }, []);

  const handleNuevaCita = () => {
    if ([paciente, propietario, email, fecha, sintomas].includes("")) {
      Alert.alert("error", "Todos los campos son obligatorios");
    }
    const nuevoPaciente = {
      id: Date.now(),
      paciente,
      propietario,
      email,
      telefono,
      fecha,
      sintomas,
    };
    setPacientes([...pacientes, nuevoPaciente]);
    setModalVisible(!modalVisible);
    setPaciente("");
    setPropietario("");
    setEmail("");
    setTelefono("");
    setFecha(new Date());
    setSintomas("");
  };
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva <Text style={styles.tituloBold}>Cita</Text>
          </Text>
          <Pressable
            style={styles.btnCancelar}
            onLongPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre del paciente"
              placeholderTextColor={"#666"}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre del propietario"
              placeholderTextColor={"#666"}
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="email@dominio.com"
              placeholderTextColor={"#666"}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="0123456789"
              placeholderTextColor={"#666"}
              keyboardType="number-pad"
              value={telefono}
              onChangeText={setTelefono}
              maxLength={10}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Síntomas paciente</Text>
            <View style={styles.fechaContenedor}>
              <DateTimePicker
                style={{ flex: 1, textAlign: "center" }}
                value={fecha}
                locale="es"
                onChange={(event, date) => setFecha(date)}
              />
            </View>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Síntomas paciente</Text>
            <TextInput
              style={[styles.input, styles.sintomasInput]}
              placeholder="Síntomas"
              placeholderTextColor={"#666"}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Pressable style={styles.btnNuevaCita} onPress={handleNuevaCita}>
            <Text style={styles.btnNuevaCitaTexto}>Agregar Paciente</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: "#6d28d9",
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    color: "#ffffff",
  },
  tituloBold: {
    fontWeight: "900",
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: "#fff",
    marginTop: 15,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  sintomasInput: {
    height: 100,
  },
  fechaContenedor: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  btnCancelar: {
    marginVertical: 30,
    backgroundColor: "#5827a4",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
  },
  btnCancelarTexto: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase",
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: "#f59e0b",
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    color: "#5827a4",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default Formulario;
