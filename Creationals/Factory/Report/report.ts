import promptSync from "prompt-sync";

namespace Reports {
    interface Report {
        generate(): void;
    }

    class SalesReport implements Report {
        generate(): void {
            console.log('Generating sales report');
        }
    }

    class InventoryReport implements Report {
        generate(): void {
            console.log('Generating inventory report');
        }
    }

    abstract class ReportFactory {
        protected abstract createReport(): Report;

        generateReport(): void {
            const report = this.createReport();
            report.generate();
        }
    }

    class SalesReportFactory extends ReportFactory {
        override createReport(): Report {
            return new SalesReport();
        }
    }

    class InventoryReportFactory extends ReportFactory {
        override createReport(): Report {
            return new InventoryReport();
        }
    }

    function main() {
        let reportFactory: ReportFactory;

        const prompt = promptSync();
        
        const reportType = prompt('¿Qué tipo de reporte deseas? %c(sales/inventory)');

        if (reportType === 'sales') {
            reportFactory = new SalesReportFactory();
        } else {
            reportFactory = new InventoryReportFactory();
        }

        reportFactory.generateReport();
    }

    main();
}