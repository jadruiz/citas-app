import React from "react";
import { Pressable, SafeAreaView, Text, View, StyleSheet } from "react-native";
import { formatearFecha } from "../helpers";

const InformacionPaciente = ({ paciente, setPaciente, setModalPaciente }) => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <View>
        <Pressable
          style={styles.btnCerrar}
          onLongPress={() => {
            setModalPaciente(false);
            setPaciente({});
          }}
        >
          <Text style={styles.btnCerrarTexto}>Cerrar X</Text>
        </Pressable>
      </View>
      <Text style={styles.titulo}>
        Información <Text style={styles.tituloBold}>Paciente</Text>
      </Text>
      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Propietario</Text>
          <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.valor}>{paciente.email}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Teléfono</Text>
          <Text style={styles.valor}>{paciente.telefono}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Fecha</Text>
          <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Sintomas</Text>
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#f59e0b",
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
  btnCerrar: {
    marginVertical: 30,
    backgroundColor: "#e06900",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
  },
  btnCerrarTexto: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase",
  },
  campo: {
    marginBottom: 10,
  },
  label: {
    textTransform: "uppercase",
    color: "#374151",
    fontWeight: "700",
    marginBottom: 3,
    fontSize: 12,
  },
  valor: {
    fontWeight: "700",
    fontSize: 20,
    color: "#334155",
  },
  contenido: {
    backgroundColor: "#fff",
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default InformacionPaciente;
