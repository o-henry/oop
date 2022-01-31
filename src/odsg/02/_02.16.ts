// Before
class ResponseFactory { 
    public createApiResponse(data: array): Response { 
        return new Response(json_encode(data, JSON_THROW_ON_ERROR | JSON_FORCE_OBJECT), [
            //              ___________ : json_encode() is a hidden dependency
            'Content-Type' => 'application/json'
        ])
    }
}

// After
class JsonEncoder { 
    /**
     * @throws RuntimeException
     */
    public encode(data: array):string  {
        try { 
            return json_encode(data, JSON_THROW_ON_ERROR | JSON_FORCE_OBJECT)
        } catch(previous: RuntimeException) { 
            throw new Error(
                'Failed to encode data: ',
                previous
            )
        }
    }
}

class ResponseFatory { 
    private jsonEncoder: JsonEncoder

    constructor(jsonEncoder: JsonEncoder) {
        this.jsonEncoder = jsonEncoder
    }

    public createApiResponse(data): Response { 
        return new Response(this.jsonEncoder.encode(data),
        [
            'Content-Type' => 'application/json'
        ]);
    }
}