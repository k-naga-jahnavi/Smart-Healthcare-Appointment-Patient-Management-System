import { LightningElement, api, wire } from 'lwc';
import getAppointments from '@salesforce/apex/PatientDashboardController.getAppointments';
import getPrescriptions from '@salesforce/apex/PatientDashboardController.getPrescriptions';
import getClaims from '@salesforce/apex/PatientDashboardController.getClaims';

export default class PatientDashboard extends LightningElement {
    @api recordId;
    appointments = [];
    prescriptions = [];
    claims = [];
    error;

    @wire(getAppointments, { patientId: '$recordId' })
    wiredAppointments({ error, data }) {
        if (data) this.appointments = data;
        if (error) this.error = error;
    }

    @wire(getPrescriptions, { patientId: '$recordId' })
    wiredPrescriptions({ error, data }) {
        if (data) this.prescriptions = data;
        if (error) this.error = error;
    }

    @wire(getClaims, { patientId: '$recordId' })
    wiredClaims({ error, data }) {
        if (data) this.claims = data;
        if (error) this.error = error;
    }
}
