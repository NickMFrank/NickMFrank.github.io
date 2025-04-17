const Credit = () => {
    return (
        <div className="pb-2">
            <div className="flex justify-center center-items flex-wrap text-center text-white space-x-6">
                <p>Based on tutorial from <a href="https://www.youtube.com/@javascriptmastery" target="_blank" rel="noopener noreferrer" className="hover:underline text-secondary">JSMastery</a></p>
                <p>Boat model by <a href="https://sketchfab.com/JasperTobias" target="_blank" rel="noopener noreferrer" className="hover:underline text-secondary">Jasper Tobias</a></p>
                <p>Submarine model by <a href="https://sketchfab.com/robertkotsch" target="_blank" rel="noopener noreferrer" className="hover:underline text-secondary">Robert Kotsch</a></p>
            </div>
            <p className="text-center md:text-right pr-2">Copyright &#169; 2025 Nick Frank. All rights reserved.</p>
        </div>
    )
}

export default Credit