import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"

export function Home() {
  const participants = [
    "Erick",
    "Diego",
    "Vinícius",
    "Ana",
    "Isabela",
    "Mariana",
    "Diogo",
    "João",
    "Pedro",
    "Yuri",
    "Rodrigo",
  ]

  function handleAddParticipant() {
    console.log("Você clicou no botão de adicionar")
  }

  function handleRemoveParticipant(name: string) {
    console.log(`Você clicou em remover o(a) participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
