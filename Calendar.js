import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Button, Modal, TouchableOpacity, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import StatusBarBlack from './StatusBar';

export default function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDayPress = (date) => {
   setSelectedDate(date.dateString);
  };
  const theme = {
    backgroundColor: 'black',
    calendarBackground: '#1C1C1E',
    textSectionTitleColor: '#FFA800',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#FFFFFF',
    dayTextColor: '#FFA800',
    textDisabledColor: '#1C1C1E',
    dotColor: '#FFA800',
    selectedDotColor: '#ffffff',
    arrowColor: 'orange',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: '#ffa800',
    indicatorColor: '#FFA800',
    textDayFontSize: 20,
    textMonthFontSize: 20,
    textDayHeaderFontSize: 13,
  };
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.button}>Open Calendar</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButton}>X</Text>
          </TouchableOpacity>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: '#FFA800' },
            }}
            theme={theme}
            style={{ borderRadius: 20, width:343,height:380}}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
  },
  button: {
    color: '#FFA800',
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  closeButton: {
    color: '#FFA800',
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
});