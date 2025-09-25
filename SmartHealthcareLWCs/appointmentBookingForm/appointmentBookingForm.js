import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AppointmentBookingForm extends LightningElement {
    handleSuccess(event) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: "Success",
                message: "Appointment booked successfully!",
                variant: "success"
            })
        );
        this.template.querySelector('lightning-record-edit-form').reset();
    }
}
