import {Injectable} from "@angular/core";
import {BrowserXhr, Http, ResponseContentType} from "@angular/http";
import {API_PADM} from "../api/app.api";
// import * as FileSaver from "file-saver";

@Injectable()
export class ReportService extends BrowserXhr {

    constructor(private http: Http) {
        super();
    }

    // downloadFile() {
    //     this.http.get(
    //         `${API_PADM}/pdf`).subscribe(
    //         (response) => {
    //             console.log(response);
    //             let mediaType = 'application/pdf';
    //             let blob = new Blob([response._body], {type: mediaType});
    //             console.log(blob);
    //             let fileName = "cities.pdf";
    //             FileSaver.saveAs(blob, fileName);
    //         });
    // }

    downloadPDF(url: string, folder_tmp: string): any {

        return this.http
            .get(`${API_PADM}/${url}/${folder_tmp}`, {responseType: ResponseContentType.Blob})
            .map((res) => {
                return new Blob([res.blob()], {type: 'application/pdf'});
            });
    }

    clearReport(folder_tmp) {
        this.http.get(`${API_PADM}/reports-clean/${folder_tmp}`)
            .subscribe((response) => {

                // console.log(response);
                // console.log(response.status);
                // console.log(response.statusText);

                if (response.status === 200) {
                    console.log(`Folder ${folder_tmp} deleted`);
                } else {
                    this.clearReport(folder_tmp);
                    console.log('Erro ao apagar pasta no servidor! Enviar isso por email');
                }

            });
    }

    randomString() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 8; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }


}
